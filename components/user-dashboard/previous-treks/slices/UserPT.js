import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { ratingStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Progress } from "reactstrap";
import Link from "next/link";
import auth from "../../../../services/Authenticate";
import {
  getdashBoardUserBooking,
  getTrekReview
} from "../../../../services/queries";
import moment from "moment";
import { useRouter } from "next/router";
import Prismic from "@prismicio/client";
import { Client } from "../../../../utils/prismicHelpers";
import Image from "next/image";
import ReceiptTemplate from "./ReceiptTemplate";
import CertificateTemplate from "./CertificateTemplate;";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { Rating } from "primereact/rating";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const UserPT = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedReceipts, setselectedReceipts] = useState();

  const [userServiceObject, setUserServiceObject] = useState(undefined);
  const [userEmail, setUserEmail] = useState(undefined);
  const [hasMounted, setHasMounted] = useState(false);
  const [bookings, setBookings] = useState(undefined);
  const [bookingOwner, setBookingOwner] = useState(undefined);
  const [render, setRender] = useState(false);

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const router = useRouter();
  const myTrekRef = useRef();

  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    errors,
    formState,
    getValues
  } = useForm();

  const [reviewIndexes, setReviewIndexes] = React.useState([]);
  const [reviewcounter, setReviewCounter] = React.useState(0);
  const [reviewData, setReviewData] = React.useState();

  React.useEffect(() => {
    //const res=await
    auth.keycloak().then(([userTokenObject, userEmail]) => {
      setUserEmail(userEmail);
      setUserServiceObject(userTokenObject);
      fetchAndBindUserBookings(userEmail);

      // return userEmail;
    });

    // console.log(res);
    //fetchAndBindUserBookings(res);
  }, []);

  const fetchTrekReview = () => {
    getTrekReview(bookings.trekId, bookings.batchId).then(data => {
      setReviewData(data);
      const arr = Array.from(new Array(data.length), (x, i) => i);
      setReviewIndexes(arr);
      setReviewCounter(1);
    });
  };

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const saveData = () => {
    setActiveTab(null);
  };

  function fetchAndBindUserBookings(email) {
    getdashBoardUserBooking(email, true).then(bookingsData => {
      /// Idenitify and get the booking owner profile informations
      // console.log(bookingsData);
      if (bookingsData.length > 0) {
        const bookingOwner = bookingsData.map(element => {
          const mainuser = element.trekMates.find(
            subElement => subElement.userDetailsForDisplay.email === email
          );
          if (mainuser !== undefined) return mainuser;
        });
        setBookingOwner(bookingOwner[0]);
        getAndSetTrekContents(bookingsData, email);
      }
    });
  }

  const setStates = bookTrekContents => {
    //console.log(bookTrekContents);
    setBookings(bookTrekContents);
    const arr = Array.from(new Array(bookTrekContents.length), (x, i) => i);
    setIndexes(arr);
    setCounter(arr.length);
    setRender(true);
  };

  const getAndSetTrekContents = async (bookingsData, userEmail) => {
    const bookTrekContents = [];
    const client = Client();

    const prismicTrekContents = [];
    for (const book of bookingsData) {
      const trekName = book.trekName.replaceAll(" ", "-").toLowerCase();

      let result;
      const findContents = prismicTrekContents.find(
        x => x.trekName === trekName
      );
      //console.log(findContents);
      if (findContents === undefined) {
        result = await Client().getByUID("trek", trekName);
        //console.log(result);
        prismicTrekContents.push({
          trekName: trekName,
          result: result
        });
      } else {
        result = findContents.result;
      }

      //console.log(slice);
      let bannerImage = "";
      let trekCaptions = book.trekName;

      if (result !== undefined) {
        const slice = result.data.body.find(
          x => x.slice_type === "trek_banner"
        );
        //console.log(slice);
        bannerImage = slice.primary.trek_banner_image.url;
        trekCaptions = slice.primary.trek_caption;
      }

      bookTrekContents.push({
        trekId: book.trekId,
        batchId: book.batchId,
        bookingId: book.bookingId,
        email: userEmail,
        bannerImageUrl: bannerImage,
        trekName: trekCaptions,
        startDate: book.batchStartDate,
        endDate: book.batchEndDate,
        trekCoordinator: book.trekCoordinator,
        trekWhatsappLink: book.trekWhatsappLink,
        bookingParticipantState: book.bookingParticipantState,
        participantsCount: book.trekMates.length,
        userTrekBookingParticipants: book.trekMates,
        trekStatus: "COMPLETED", //book.bookingState,
        reviewStatus: "no"
      });
    }
    setStates(bookTrekContents);
  };

  const onSubmit = formData => {
    console.log(JSON.stringify(formData));
  };

  const addItineraries = () => {
    setReviewIndexes([...indexes, counter]);
    setReviewCounter(prevCounter => prevCounter + 1);
  };

  const prevTrekData = bookings?.map(function(data, i) {
    return (
      <>
        <div key={data.id}>
          <div className="card mb-4">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                {/* <div className="trekimg"> */}
                {data?.bannerImageUrl !== "" ? (
                  <img src={data?.bannerImageUrl} className="trekimg" />
                ) : (
                  <img src="/ip.png" className="trekimg" />
                )}
                {/* {data && (
                    <Image
                      src={data?.bannerImageUrl}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  )} */}
                {/* </div> */}
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="trek-card-inner-box">
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <h3 className="title-h3">{data.trekName}</h3>
                    </div>
                    <div>
                      <p className="m-0 p-text-10-fgb">{data?.trekStatus}</p>
                    </div>
                  </div>
                  <Progress
                    className={
                      data.trekStatus === "COMPLETED"
                        ? "trek-completed-progress"
                        : "trek-cancelled-progress"
                    }
                    value="100"
                  />

                  <div className="d-flex flex-wrap align-items-center justify-content-between py-4 mb-2">
                    <div>
                      <p className="m-0 p-text-small-fg">batch dates</p>
                      <p className="m-0 p-text-2-fg">
                        {moment(data?.startDate).format("MM/DD/YYYY")} -{" "}
                        {moment(data?.endDate).format("MM/DD/YYYY")}
                      </p>
                    </div>
                    <div>
                      <p className="m-0 p-text-small-fg">participants</p>
                      <p className="m-0 p-text-2-fg">
                        {data?.participantsCount} trekkers
                      </p>
                    </div>
                    <div>
                      <p className="m-0 p-text-small-fg">
                        Experience Coordinator
                      </p>
                      <p className="m-0 p-text-2-fg text-decoration-underline">
                        {data?.trekCoordinator?.firstName}{" "}
                        {data?.trekCoordinator?.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="flex-grow-1">
                      <p className="m-0 text-decoration-underline p-text-small-fg">
                        <PDFDownloadLink
                          document={<ReceiptTemplate receiptData={data} />}
                          fileName={data.trekName}
                        >
                          {/* {({ blob, url, loading, error }) => */}
                          {/* loading ? <i className="pi pi-spin pi-spinner"></i> : <i className="pi pi-download"></i> */}
                          {/* } */} <i className="pi pi-download p-pr-2"></i>
                          Download Receipts
                        </PDFDownloadLink>
                      </p>
                      <p className="m-0 text-decoration-underline p-text-small-fg">
                        View Rented Gear
                      </p>
                    </div>
                    <div>
                      {data.trekStatus === "COMPLETED" && (
                        <PDFDownloadLink
                          document={
                            <CertificateTemplate certificateData={data} />
                          }
                          fileName={data.trekName}
                        >
                          {/* {({ blob, url, loading, error }) => */}
                          {/* loading ? <i className="pi pi-spin pi-spinner"></i> : <i className="pi pi-download"></i> */}
                          {/* } */} <i className="pi pi-download p-pr-2"></i>
                          <span className="btn table-btn-blue">
                            Download Certificate
                          </span>
                        </PDFDownloadLink>
                      )}
                      {data.reviewStatus === "no" && (
                        <button
                          className="btn table-btn-yellow ml-custom-3"
                          onClick={() => {
                            toggle(i);
                            fetchTrekReview();
                          }}
                        >
                          Write About Your Experience
                        </button>
                      )}
                      {data.trekStatus === "Cancelled" && (
                        <button className="btn table-btn-green-lg">
                          register again
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {i === activeTab && (
              <div className="row mb-3">
                <div className="col-lg-1 col-md-12"></div>
                <div className="col-lg-10 col-md-12">
                  <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset}>
                    <div className="card">
                      <div className="py-4 px-5 mx-5">
                        <h5 className="p-text-2-fg b-left-3px">
                          your thoughts on the miyar valley trek expereience
                        </h5>
                        <p className="p-text-3">
                          At Indiahikes, we take your feedback very seriously.
                          Every question that you answer is not only seen by me
                          but our entire team. We even forward sections of your
                          feedback to our teams on the slopes. I admit, we also
                          share the happy sections!{" "}
                        </p>
                        <p className="p-text-3 mb-5">
                          Let us start right away.{" "}
                        </p>

                        {reviewIndexes.slice(0, 1).map(i => {
                          {
                            return reviewData?.reviewQuestions.map(
                              (item, index) => {
                                const multiple =
                                  item.reviewQuestionType.toLowerCase() ==
                                  "multiple_choice";
                                const single =
                                  item.reviewQuestionType.toLowerCase() ==
                                  "single_choice";
                                const descriptive =
                                  item.reviewQuestionType.toLowerCase() ==
                                  "descriptive";
                                const rating =
                                  item.reviewQuestionType.toLowerCase() ==
                                  "rating";

                                return (
                                  <div className="q-border py-4">
                                    <p className="p-text-3 font-weight-bold m-0">
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: item.question
                                        }}
                                      />
                                    </p>

                                    {multiple && (
                                      <div>
                                        {item.answers.map((ch, mindex) => {
                                          return (
                                            <div>
                                              <p></p>
                                              <Controller
                                                name={`${item.questionId}-${mindex}`}
                                                control={control}
                                                render={({
                                                  onChange,
                                                  value
                                                }) => (
                                                  <Checkbox
                                                    checked={value}
                                                    onChange={e => {
                                                      onChange(e.checked);
                                                    }}
                                                  />
                                                )}
                                              />
                                              <label className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
                                                {ch}
                                              </label>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                    {single && (
                                      <div>
                                        {item.answers.map((ch, rindex) => {
                                          // @ts-ignore
                                          const formValues = getValues(
                                            item.questionId.toString()
                                          );
                                          // @ts-ignore
                                          let radioChecked = false;
                                          if (formValues !== undefined) {
                                            const val = formValues; //.split('-');
                                            //console.log(val);
                                            if (val === ch) radioChecked = true;
                                          }
                                          return (
                                            <div className="p-field-radiobutton">
                                              <p></p>
                                              <Controller
                                                name={`${item.questionId}`}
                                                control={control}
                                                render={({
                                                  onChange,
                                                  value
                                                }) => (
                                                  <RadioButton
                                                    name={`${item.questionId}`}
                                                    onChange={e => {
                                                      onChange(`${ch}`);
                                                      addItineraries();
                                                    }}
                                                    checked={radioChecked}
                                                  />
                                                )}
                                              />

                                              <label className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">
                                                {ch}
                                              </label>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                    {descriptive && (
                                      <div className="q-border py-4">
                                        <p></p>
                                        <Controller
                                          name={`${item.questionId}`}
                                          control={control}
                                          render={({ onChange, value }) => (
                                            <InputText
                                              value={value}
                                              onChange={onChange}
                                              className="p-my-2 w-100"
                                            />
                                          )}
                                        />
                                      </div>
                                    )}
                                    {rating && (
                                      <div className="p-rating">
                                        <p></p>
                                        <Controller
                                          name={`${item.questionId}`}
                                          control={control}
                                          render={({ onChange, value }) => (
                                            <Rating
                                              stars={5}
                                              className="p-rating-star"
                                              value={value}
                                              onChange={e => {
                                                onChange(e.value);
                                              }}
                                            />
                                          )}
                                        />
                                      </div>
                                    )}
                                  </div>
                                );
                              }
                            );
                          }
                        })}

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn table-btn-green-lg"
                          >
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-1 col-md-12"></div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container container-custom p-0">
          <div className="bg-gray-shade">
            <div className="td-bg" />
            <div className="container td-bg-mr">
              <div className="row">
                <div className="col-lg-10 col-md-12 bg-gray border-right b-right-2px">
                  <div className="mb-2 py-4">
                    <p className="p-text-1 font-weight-bold m-0">
                      Hi {bookingOwner?.userDetailsForDisplay.firstName} -{" "}
                      {bookingOwner?.userDetailsForDisplay.lastName}
                    </p>
                    <p className="p-text-1 font-weight-bold">
                      Welcome To Your Indiahikes Trek Dashboard!
                    </p>
                    <p className="col-md-8 p-text-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequa
                    </p>
                  </div>

                  <div>
                    <h5 className="p-text-2-fg b-left-3px">
                      your Previous Indiahikes treks
                    </h5>

                    <div className="row">
                      <div className="col-lg-11 col-md-12">{prevTrekData}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 bg-white p-0">
                  <div>
                    <div className="menu-title-bg py-3 px-3">
                      <p className="p-text-2 font-weight-bold m-0">
                        Trekker Dashboard
                      </p>
                    </div>
                    <div className="right-menu-dashboard sticky-top">
                      <ul>
                        <li>
                          <Link href="../../../user-dashboard/user-upcoming-treks">
                            <span>upcoming treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-previous-treks">
                            <span className="active-li">previous treks</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-myprofile">
                            <span>my profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="../../../user-dashboard/user-trekvouchers">
                            <span>trek vouchers</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <span>Logout</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {bookings === undefined && (
            <>
              <div className="d-flex align-items-center justify-content-center mt-5 mb-3">
                <div class="spinner-grow text-warning" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning mx-2" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div className="text-center">
                <p>Loading please wait...</p>
              </div>
            </>
          )}
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default UserPT;
