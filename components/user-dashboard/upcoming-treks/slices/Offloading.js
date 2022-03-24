import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  getUserVoucher,
  getUsersVoucherByBookingId,
  getBackPackOffloadingUserStatus
} from "../../../../services/queries";
import { Dropdown } from "primereact/dropdown";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import { Toast } from "primereact/toast";
import { Checkbox } from "primereact/checkbox";
import { computeStyles } from "@popperjs/core";
import { useRouter } from "next/router";

const Offloading = forwardRef((props, ref) => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [headerData, setHeaderData] = React.useState([]);
  const [render, setRender] = useState(true);
  const [vouchers, setVouchers] = React.useState([]);
  const [offLoadings, setOffLoadings] = React.useState([]);
  const [showOffLoadingContents, setShowOffLoadingContents] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);
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
  const [saveState, setSaveState] = useState(false);
  const toast = useRef(null);
  const router = useRouter();
  React.useEffect(() => {}, [indexes, offLoadings]);

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    changeState(data) {
      initData(data);
    }
  }));

  const deriveBookingState = activeBooking => {
    if (activeBooking.bookingState === "COMPLETED") {
      setShowOffLoadingContents(true);
      return true;
    } else {
      setShowOffLoadingContents(false);
      return false;
    }
  };

  const initData = async data => {
    //  console.log(data);

    if (deriveBookingState(data) == true) {
      // console.log("Called here");

      let vouchers = [];
      vouchers = await getUsersVoucherByBookingId(data.bookingId);
      if (vouchers?.length > 0) {
        vouchers = transFormVoucherPayload(vouchers);
        setVouchers(vouchers);
      }

      setHeaderData(data);

      const fee =
        data.backPackOffloadingDays * data.backPackOffloadingCostPerDay;
      const tax = fee * (data.backPackOffloadingCostPerDay / 100); //backPackOffloadingTax
      const offLoadingFee = Math.round(fee + tax);

      const offLoadingList = [];

      getBackPackOffloadingUserStatus(data.bookingId).then(resData => {
        //console.log(resData);
        data?.userTrekBookingParticipants.map(pdata => {
          const offloadUser = resData?.find(
            x => x.participantId === pdata.participantId
          );

            if(pdata?.bookingParticipantState !== "CANCELLED" ) {

          offLoadingList.push({
            id: pdata.participantId,
            name:
              pdata?.userDetailsForDisplay.email === data.email
                ? " * " +
                  pdata?.userDetailsForDisplay.firstName +
                  pdata?.userDetailsForDisplay.lastName +
                  " (You) "
                : pdata?.userDetailsForDisplay.firstName +
                  pdata?.userDetailsForDisplay.lastName,
            //voucher: vouchers,
            offloadingFee: offLoadingFee,
            youPay: offLoadingFee,
            offloadingStatus: "",
            optedVoucherId: "",
            voucherAmount: 0,
            voucherId: "",
            selected: false,
            email: pdata?.userDetailsForDisplay.email,
            offloadingParticipantStatus:
              offloadUser == undefined || false
                ? "N/A"
                : offloadUser.offloadingState,
            bookingParticipantState: pdata?.bookingParticipantState
          });
           }
        });
        setOffLoadings(offLoadingList);
        // console.log(offLoadingList);
        // console.log(offLoadingList.length);

        const arr = Array.from(new Array(offLoadingList?.length), (x, i) => i);
        // console.log(arr.length);
        setIndexes(arr);
        setCounter(arr.length);
        setRender(true);
      });
    } else {
      setIndexes([]);
      setCounter(0);
    }
  };

  const transFormVoucherPayload = vouchers => {
    const voucherlist = [];
    vouchers.map(v => {
      voucherlist.push({
        id: v.id,
        userId: v.userId,
        title: v.title,
        amount: v.amount,
        validTill: v.validTill,
        message: v.message,
        amountAvailed: v.amountAvailed,
        voucherTypeId: v.voucherTypeId,
        sendMailer: v.sendMailer,
        voucherStatus: v.voucherStatus,
        voucherType: v.voucherType,
        userName: v.userName,
        userEmail: v.userEmail,
        amountAvailable: v.amountAvailable,
        usedVocuherAmount: 0,
        appliedDetails: []
      });
    });
    return voucherlist;
  };
  const localgetVoucher = async userEmail => {
    let dt = [];
    const data1 = await getUserVoucher(userEmail)
      .then(data => {
        return data;
      })
      .catch(res => {
        if (res.response.data?.message) {
          return dt;
        }
      });
    return data1;
  };

  const onVoucherApply = (id, index) => {
    const sdata = offLoadings;
    const user = sdata.find(u => u.id === id);
    if (user.optedVoucherId > 0) {
      const selectedVoucher = vouchers.find(
        vid => vid.id == user.optedVoucherId
      );
      const youPay = user.youPay; //computeTotal(sdata.trekUsers);
      //console.log(youPay);
      if (youPay > 0) {
        const currentAvailableAmount = selectedVoucher.amountAvailable;

        if (currentAvailableAmount > 0) {
          const amountToDeductInVocuher =
            youPay > currentAvailableAmount ? currentAvailableAmount : youPay;

          sdata.find(u => u.id === id).voucherId = user.optedVoucherId;
          sdata.find(u => u.id === id).voucherAmount = amountToDeductInVocuher;
          sdata.find(u => u.id === id).youPay = Number(
            youPay - amountToDeductInVocuher
          );

          // console.log(amountToDeductInVocuher);
        }
      }
      // console.log(JSON.stringify(sdata.find(u => u.id === id)));
      setOffLoadings(sdata);

      const arr = Array.from(new Array(offLoadings.length), (x, i) => i);

      setIndexes(arr);
      setCounter(arr.length);
      setRender(true);
      // await dispatch(addOrUpdateState(sdata));
      //computeTotal(sdata.trekUsers);
    }
  };

  const onVoucherSelect = async (id, value) => {
    // console.log(JSON.stringify(value));
    const sdata = offLoadings;
    //// check if already it is selected:
    const optedId = sdata.find(u => u.optedVoucherId === value);
    // console.log(optedId);

    if (optedId !== undefined) {
      toast.current.show({
        severity: "error",
        summary: `'The selected Voucher is already applied'`,
        detail: "Make payment"
      });
      /// Resetting the old selected voucher values;
      sdata.find(u => u.id === id).optedVoucherId = "";
      sdata.find(u => u.id === id).voucherAmount = 0;
      sdata.find(u => u.id === id).voucherId = "";
      // await dispatch(addOrUpdateState(sdata));
      //computeTotal(sdata.trekUsers);
      return;
    }
    sdata.find(u => u.id === id).optedVoucherId = value;
    sdata.find(u => u.id === id).voucherAmount = 0;
    sdata.find(u => u.id === id).voucherId = "";
  };

  const onChecked = (id, value) => {
    offLoadings.find(u => u.id === id).selected = value;
    const selectedCount = offLoadings.filter(u => u.selected === true).length;
    setShowSaveButton(selectedCount > 0);
  };

  const navigateTo = () => {
    const selectedList = offLoadings.filter(u => u.selected === true);
    selectedList.map(p => {
      // p.optedVoucherId='',
      // p.voucherId='',
      // p.voucherAmount=0
    });
    const dt = {
      header: headerData,
      participants: selectedList,
      userVouchers: vouchers
    };
    props.onOffLoadingPayment(dt);
  };

  const onCancelButtonClick = () => {
    router.push(
      `/user-dashboard/cancellation-trek?batchId=${headerData?.batchId}&flag=offloading-p-cancel`
    );
  };

  return (
    <>
      <Toast ref={toast} />
      {showOffLoadingContents === true ? (
        <div>
          <h5 className="p-text-3-fg b-left-blue-3px mb-3">
            Backpack Offloading
          </h5>
          <p className="col-md-8 p-text-4">
            Please note: We don't usually encourage offloading of backpacks.
            These backpacks are carried by mules or porters. Having too many
            extra resources on a trail isn't good for the eco system. Besides,
            when you complete a trek by carrying your own backpack, the
            self-sufficient and confidence that you get at the end of the trek
            is incomparable! So avoid offloading your backpack. Unless of course
            you have a genuine issue, I'll understand if you want to offload it.
          </p>
          <div className="d-flex justify-content-between p-text-3-fg-book">
            <div>
              <p className="m-0">
                No. of offloading days: {headerData?.backPackOffloadingDays}{" "}
                days
              </p>
              <p className="p-text-small-fg font-italic">
                headerData?.trekName
              </p>
            </div>
            <div>
              <p>
                BO. cost per day: Rs. {headerData?.backPackOffloadingCostPerDay}
              </p>
            </div>
            <div>
              <p>Applicable tax: {headerData?.backPackOffloadingTax}%</p>
            </div>
            {headerData?.userTrekBookingParticipants?.filter(
              x => x?.backpackOffloadingAmountPaid != null
            ).length > 0 && (
              <button
                className="btn table-btn-maroon"
                onClick={e => onCancelButtonClick()}
              >
                Cancel trek
              </button>
            )}
          </div>
          <div>
            <table className="table table-dashboard-profile-style-1">
              <thead>
                <tr className="header-bg">
                  <th className="w-20per">Select</th>
                  <th className="w-20per">participants</th>
                  {/*<th className="w-20per">Applicable Voucher</th>*/}
                  <th className="w-15per">Offloading Fee</th>
                  <th className="w-15per">You Pay</th>
                  <th className="w-15per">offloading status</th>
                </tr>
              </thead>
              <tbody>
                {indexes.map(index => {
                  const fieldName = `voucher[${index}]`;
                  const sdata = offLoadings[index];
                  // console.log(sdata);
                  const lvouchers = [];

                  if (vouchers?.length > 0) {
                    vouchers
                      ?.filter(
                        x =>
                          x.userName?.toLowerCase() ===
                          sdata?.email?.toLowerCase()
                      )
                      .map(v => {
                        lvouchers.push({
                          title: v.title + "-" + v.amountAvailable,
                          id: v.id
                        });
                      });
                  }

                  let status = 0;
                  const state = sdata?.bookingParticipantState === "CANCELLED";
                  if (state == true) {
                    status = 0;
                  } else {
                    /* if (sdata?.offloadingStatus==="Not Required" 
                          || sdata?.offloadingStatus==="paid"){
                            //status= 0;
                          }*/
                    if (sdata?.offloadingParticipantStatus !== "N/A") {
                      status = 0;
                    } else {
                      status = 1;
                    }
                  }
                  return (
                    <>
                      <tr key={sdata?.id}>
                        <td>
                          <div className="d-flex alifn-items-center">
                            <div>
                              {status == 1 && (
                                <FormGroup className="reg-dropdown mp-dropdown">
                                  <Controller
                                    name={`${fieldName}.checked`}
                                    control={control}
                                    defaultValue={sdata?.selected}
                                    render={({ onChange, value }) => (
                                      <Checkbox
                                        inputId="category1"
                                        name="category"
                                        onChange={e => {
                                          onChange(e.checked);
                                          onChecked(sdata?.id, e.checked);
                                        }}
                                        checked={value}
                                      />
                                    )}
                                  />
                                </FormGroup>
                              )}
                            </div>
                          </div>
                        </td>

                        <td>
                          {index + 1}. {sdata?.name}
                        </td>
                        {/*
                            <td>
                              <div className="d-flex alifn-items-center">
                                <div>
                                <FormGroup className="reg-dropdown mp-dropdown">
                                    <Controller
                                      name={`${fieldName}.appliedVoucher`}
                                      control={control}
                                      render={({ onChange, value }) => (
                                        <Dropdown
                                          optionLabel="title"
                                          optionValue="id"
                                          value={value}
                                          options={lvouchers}
                                          onChange={e => {
                                            onChange(e.value);
                                            onVoucherSelect(sdata?.id, e.value);
                                          }}
                                          placeholder="Select a Voucher "
                                        />
                                      )}
                                    />
                                  </FormGroup>
                                </div>
                                <div className="mx-2">
                                  <button className="btn table-btn-yellow-sm"  
                                  onClick={e =>
                                      onVoucherApply(sdata?.id, index)
                                    }>
                                    <span className="px-2">Apply</span>
                                  </button>
                                </div>
                              </div>
                            </td>
                                  */}
                        <td>{sdata?.offloadingFee}</td>
                        <td>{sdata?.youPay}</td>
                        <td>
                          <span>{sdata?.offloadingParticipantStatus}</span>
                          {sdata?.offloadingParticipantStatus === "Paid" && (
                            <span className="mx-2 p-text-small-fg-red text-decoration-underline">
                              Cancel
                            </span>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <p className="m-0 p-text-small-brown">* Primary participant</p>
              </div>
              <div>
              
                  <button
                    className="btn table-btn-blue-sm hvr-grow"  disabled={!showSaveButton}
                    onClick={e => navigateTo()}
                  >
                    <span className="px-2">pay offloading fee</span>
                  </button>
               
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="p-text-4 mb-0">
          Backpack offloading fee action will enable after the trek-payment
        </p>
      )}
    </>
  );
});

export default Offloading;
