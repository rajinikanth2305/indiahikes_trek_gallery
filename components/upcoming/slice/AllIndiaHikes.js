import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllIndiaHikes = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const easyModerateTreksList = slice.primary.easy_moderate_treks_list;
  const moderateTreksList = slice.primary.moderate_treks;
  const difficultTreksList = slice.primary.difficult_treks;
  const familyTreksList = slice.primary.family_treks;
  const diyTreksList = slice.primary.diy_treks;

  const easyModerateTreks = easyModerateTreksList.map(function(data1, i1) {
    return (
      <>
        <div className="d-flex align-items-center" key={i1}>
          <div>
            <p className="badge-green"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3">{data1.text}</p>
          </div>
        </div>
      </>
    );
  });

  const moderateTreks = moderateTreksList.map(function(data2, i2) {
    return (
      <>
        <div className="d-flex align-items-center" key={i2}>
          <div>
            <p className="badge-yellow"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3">{data2.text}</p>
          </div>
        </div>
      </>
    );
  });

  const difficultTreks = difficultTreksList.map(function(data3, i3) {
    return (
      <>
        <div className="d-flex align-items-center" key={i3}>
          <div>
            <p className="badge-red"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3">{data3.text}</p>
          </div>
        </div>
      </>
    );
  });

  const familyTreks = familyTreksList.map(function(data4, i4) {
    return (
      <>
        <div className="d-flex align-items-center" key={i4}>
          <div>
            <p className="badge-blue"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3">{data4.text}</p>
          </div>
        </div>
      </>
    );
  });

  const diyTreks = diyTreksList.map(function(data5, i5) {
    return (
      <>
        <div className="d-flex align-items-center" key={i5}>
          <div>
            <p className="badge-blue"></p>
          </div>
          <div className="mx-3">
            <p className="p-display-3">{data5.text}</p>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-5 ucOpenForSmallGroup_sec">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center border-bottom-4 mb-3">
            <div className="col-lg-6 col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1 m-d-1">{RichText.asText(heading2)}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <h3 className="title-dispaly-4 my-3">Easy Moderate Treks</h3>
              {easyModerateTreks}
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">Moderate Treks</h3>
                  {moderateTreks}
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">Difficult Treks</h3>
                  {difficultTreks}
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">Family Treks</h3>
                  {familyTreks}
                </div>
                <div className="col-lg-6 col-md-12">
                  <h3 className="title-dispaly-4 my-3">DIY Treks</h3>
                  {diyTreks}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default AllIndiaHikes;
