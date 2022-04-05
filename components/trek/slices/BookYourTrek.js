import React, { useState, useEffect, useRef } from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import moment from "moment";
import Link from "next/link";
import BookingCalender from "../bookyourtrekcomps/BookingCalender";
import { Toast } from "primereact/toast";
//import UserService from '../../../utils/UserService';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { route } from "next/dist/next-server/server/router";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";

//const userService = dynamic(() => import('../../../utils/UserService'),{ ssr: false });

const BookYourTrek = ({ slice }) => {
  const heading1 = slice?.primary?.heading1;
  const cancelInfoHeading = slice?.primary?.cancel_info_heading;
  const cancelInfodetailsList = slice?.primary?.cancel_info_details;
  const [bookingDate, setBookingDate] = useState(undefined);
  const [showSelectedLabel, setShowSelectedLabel] = useState(false);
  const [feeDetails, setFeeDetails] = useState();

  const toast = useRef(null);
  const router = useRouter();

  // useEffect(() => {
  //   findFeeDetails();
  //   return () => {
  //     //   console.log("test");
  //   };
  // }, []);

  // async function findFeeDetails() {
  //   const client = Client();
  //   const doc = await client
  //     .query([Prismic.Predicates.at("document.type", "trek")])
  //     .then(function(response) {
  //       const tt = response.results[0].data.body;
  //       const slice = tt && tt.find(x => x.slice_type === "trek_fee_details");
  //       setFeeDetails(slice);
  //     });
  // }

  // let myRef = feeDetails && feeDetails?.primary?.ref_id_tosroll[0].text;
  // myRef = useRef(null);

  const bookingSelect = value => {
    setBookingDate(value);
    setShowSelectedLabel(true);
    /// focus button
    // if(document.getElementById("procregister"))
    // document.getElementById("procregister").focus();
    setTimeout(() => {
      const element = document.getElementById('procregister');
      const offset = 15;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top - 43;
      const elementPosition = (elementRect - bodyRect);
      const offsetPosition = elementPosition - offset;
      document.getElementById("procregister").focus();


      window.scrollTo({
        top: offsetPosition - 10,
        behavior: 'smooth'
      });
    }, 1000);
  };

  const register = () => {
    if (bookingDate == undefined) {
      toast.current.show({
        severity: "error",
        summary: "Seelct your Trek Booking date to proceed for registration",
        detail: "No Booking date is selected"
      });
      return;
    }
    router.push(`/registration?batchId=${bookingDate?.batchId}`);
  };

  return (
    <>
      <div id="goToBookTicket">
        <Toast ref={toast} />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="row mb-5 pt-1 mpt-0">
                <div className="col-12 col-lg-6 col-md-12">
                  <div>
                    <h2 className="title-h2 th-2m pb-08 mb-0">
                      {RichText.asText(heading1)}
                    </h2>
                    <div className="slots-bg mb-4 mmb-0">
                      <div className="row">
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-green mx-2"></span> Slots
                            Available
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-red mx-2"></span> Filling
                            Fast{" "}
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-yellow mx-2"></span>{" "}
                            Waitlisted Batch
                          </p>
                        </div>
                        <div className="col-6 col-lg-3 col-md-6">
                          <p className="p-text-3-1 mb-0">
                            <span className="badge-blue mx-2"></span> Family
                            Trek{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* reference https://jquense.github.io/react-big-calendar/examples/index.html#api */}
                    {typeof window !== "undefined" && (
                      <BookingCalender
                        onBookingSelect={bookingSelect}
                        mode={"inline_page"}
                      />
                    )}
                  </div>
                  <div className="d-m-none">
                    <div className="pt-3 d-m-none d-flex justify-content-end">
                      <div>
                        {showSelectedLabel && (
                          <div>
                            <p className="m-0 p-text-3-1">
                              <b>Selected {bookingDate?.trekName}</b>
                            </p>
                            <p className="p-text-2">
                              <b>
                                {moment(bookingDate?.startDate).format("Do")} to{" "}
                                {moment(bookingDate?.endDate).format("Do MMMM")}
                              </b>
                            </p>
                          </div>
                        )}

                        <button id="procregister"
                          className="btn btn-ptr hvr-grow"
                          onClick={register}
                        >
                          Proceed to registration
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-12"></div>
                <div className="col-12 col-lg-5 col-md-12">
                  <div className="mt-5 pt-5 mmt-0 m-p-t-2">
                    <div className="pt-2 pb-2 mb-4 d-m-block">
                      {showSelectedLabel && (
                        <div>
                          <p className="m-0 p-text-3-1">
                            <b>Selected {bookingDate?.trekName}:</b>
                          </p>
                          <p className="p-text-2">
                            <b>
                              {moment(bookingDate?.startDate).format("Do")} to{" "}
                              {moment(bookingDate?.endDate).format("Do MMMM")}
                            </b>
                          </p>
                        </div>
                      )}

                      <button
                        className="btn btn-ptr hvr-grow"
                        onClick={register}
                      >
                        Proceed to registration
                      </button>
                    </div>
                    <p className="p-text-1 b-left">
                      <b>{RichText.asText(cancelInfoHeading)}</b>
                    </p>
                    <div className="p-text-4">
                      {RichText.render(cancelInfodetailsList)}
                    </div>
                    {/* <div className="mt-5 pt-3 d-m-none">
                      {showSelectedLabel && (
                        <div>
                          <p className="m-0 p-text-3-1">
                            <b>Selected {bookingDate?.trekName}:</b>
                          </p>
                          <p className="p-text-2">
                            <b>
                              {moment(bookingDate?.startDate).format(
                                "Do"
                              )}{" "}
                              to{" "}
                              {moment(bookingDate?.endDate).format("Do MMMM")}
                            </b>
                          </p>
                        </div>
                      )}

                      <button className="btn btn-ptr hvr-grow" onClick={register}>
                        Proceed to registration
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default BookYourTrek;
