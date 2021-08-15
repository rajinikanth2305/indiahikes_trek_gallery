import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { useSelector, useDispatch } from "react-redux";
import {
  addOrUpdateState,
  selectStateData
} from "../../reduxstate/counterSlice";
import { useRouter } from "next/router";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AcceptTC = ({ data, props, onTermAccept }) => {
  const eligibilityCriteria = data;
  const stateData = useSelector(selectStateData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);
  const [agree, setAgree] = useState();

  const EligibilityCriteriaTitle =
    eligibilityCriteria &&
    eligibilityCriteria.primary.eligibility_criteria_title;
  const EligibilityCriteriaDesc =
    eligibilityCriteria &&
    eligibilityCriteria.primary.eligibility_criteria_desc;
  const heading2 = eligibilityCriteria && eligibilityCriteria.primary.heading2;
  const ecArray = eligibilityCriteria && eligibilityCriteria.items;

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, []);

  const ecList = ecArray?.map(function(data, i) {
    return (
      <>
        <p key={i} className="p-text-2 m-0">
          {i + 1}. {data.ec_heading[0].text}
        </p>
      </>
    );
  });

  const ecExplainedList = ecArray?.map(function(data, i) {
    const ec_desc = data.ec_desc.map(function(ecd, j) {
      return (
        <>
          <p key={j} className="p-text-3">
            {ecd.text}
          </p>
        </>
      );
    });
    return (
      <>
        <div key={i} className="col-lg-6 col-md-12">
          <p className="p-text-2 mb-2 text-brown-shade">
            {i + 1}. {data.ec_heading[0].text}
          </p>
          {ec_desc}
        </div>
      </>
    );
  });

  const termAccepted = () => {
    onTermAccept(true);
  };

  return (
    <>
      <div className="my-5 m-mt-1">
        <div>
          <h2 className="title-h2 reg-t-2-m pb-3 m-pb-1">
            {RichText.asText(EligibilityCriteriaTitle)}
          </h2>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div>
                <p className="p-text-2">
                  {RichText.asText(EligibilityCriteriaDesc)}
                </p>
              </div>
              <div>{ecList}</div>
            </div>
          </div>
          <div className="d-flex row my-3">
            <p className="p-text-1 my-4">
              <span className="border-bottom-custom-1 pb-1">
                <b>{RichText.asText(heading2)}</b>
              </span>
            </p>
            {ecExplainedList}
          </div>
          <div className="my-4 text-center">
            <div className="mb-4">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    onClick={e => setAgree(e.target.checked)}
                  />{" "}
                  I have read the eligibility criteria and understand the terms
                  and conditions
                </Label>
              </FormGroup>
            </div>
            {showButton && (
              <button
                className="btn btn-ih-green"
                onClick={termAccepted}
                disabled={agree === true ? "" : "disabled"}
              >
                proceed to next step of registration
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptTC;
