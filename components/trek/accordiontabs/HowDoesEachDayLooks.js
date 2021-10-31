import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HowDoesEachDayLooks = () => {
  const [dayWise, setDayWise] = useState();
  const [readMoreHeight, setReadMoreHeight] = useState(200);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      }
    ]
  };

  useEffect(() => {
    findTrekStories();
    return () => {
      // console.log("test");
    };
  }, []);

  async function findTrekStories() {
    const client = Client();
    const dayWise = await client
      .query([Prismic.Predicates.at("document.type", "trek")])
      .then(function(response) {
        const tt = response.results[0]?.data.body;
        const slice =
          tt && tt.filter(x => x.slice_type === "day_wise_itinerary");
        setDayWise(slice);
        // console.log(slice);
      });
  }

  const dayNum =
    dayWise &&
    dayWise.map(function(dd, i) {
      const daysItieneryArray = dd.items;
      const daysItienery = daysItieneryArray.map(function(daysIt, i) {
        const place_description_editor = daysIt?.place_description_editor.map(
          function(ed, j) {
            return (
              <>
                <p key={j}>{ed.text}</p>
              </>
            );
          }
        );
        return (
          <>
            <div key={i}>
              <div className="my-5 mmt-0">
                <div className="mb-4 d-m-block">
                  <Slider className="home-choose-treks" {...settings}>
                    {daysIt?.image1?.url && (
                      <div>
                        <div className="accordio-sec-images">
                          <Image src={daysIt?.image1?.url} layout="fill" />
                        </div>
                      </div>
                    )}
                    {daysIt?.image2?.url && (
                      <div>
                        <div className="accordio-sec-images">
                          <Image src={daysIt?.image2?.url} layout="fill" />
                        </div>
                      </div>
                    )}
                    {daysIt?.image3?.url && (
                      <div>
                        <div className="accordio-sec-images">
                          <Image src={daysIt?.image3?.url} layout="fill" />
                        </div>
                      </div>
                    )}
                    {daysIt?.image4?.url && (
                      <div>
                        <div className="accordio-sec-images">
                          <Image src={daysIt?.image4?.url} layout="fill" />
                        </div>
                      </div>
                    )}
                  </Slider>
                </div>
                {daysIt?.place_title[0]?.text && (
                  <p className="p-text-1">
                    <b>{daysIt?.place_title[0]?.text}</b>
                  </p>
                )}
                {daysIt?.duration[0]?.text && (
                  <p className="p-text-3-1">
                    <img src="/Duration.png" alt="img" />{" "}
                    <span className="px-2">{daysIt?.duration[0]?.text}</span>
                  </p>
                )}
                {daysIt?.altitude[0]?.text && (
                  <p className="p-text-3-1">
                    <img src="/shoes.png" alt="img" />{" "}
                    <span className="px-2">{daysIt?.altitude[0]?.text}</span>
                  </p>
                )}
                {daysIt?.difficulty[0]?.text && (
                  <p className="p-text-3-1">
                    <img src="/Offloading.png" alt="img" />{" "}
                    <span className="px-2">{daysIt?.difficulty[0]?.text}</span>
                  </p>
                )}
                {daysIt?.water_sources[0]?.text && (
                  <p className="p-text-3-1">
                    <img src="/Offloading.png" alt="img" />{" "}
                    <span className="px-2">
                      {daysIt?.water_sources[0]?.text}
                    </span>
                  </p>
                )}
                <div className="my-4 d-m-block">
                  {daysItieneryArray &&
                  daysItieneryArray[0].place_description_editor[0]?.text ? (
                    <div style={{ height: readMoreHeight, overflow: "hidden" }}>
                      <p className="p-text-4">{place_description_editor}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="p-text-4">{place_description_editor}</p>
                    </div>
                  )}
                  {daysItieneryArray &&
                  daysItieneryArray[0].place_description_editor[0]?.text ? (
                    <div className="d-flex justify-content-center bg-transparent-text-effect">
                      {readMoreHeight === 200 ? (
                        <button
                          className="btn btn-ptr"
                          onClick={() => setReadMoreHeight("auto")}
                        >
                          read more
                        </button>
                      ) : (
                        <a href="#trekexper-sec">
                          <button
                            className="btn btn-ptr"
                            onClick={() => setReadMoreHeight(200)}
                          >
                            read less
                          </button>
                        </a>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="row d-m-none">
                <div className="col-lg-7 col-md-12">
                  {daysIt?.image1?.url && (
                    <div className="day1-image-1">
                      <Image
                        src={daysIt?.image1?.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    </div>
                  )}
                </div>
                <div className="col-lg-5 col-md-12">
                  {daysIt?.image2?.url && (
                    <div className="day1-image-2">
                      <Image
                        src={daysIt?.image2?.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    </div>
                  )}
                  <div className={daysIt?.image4?.url ? "row mt-4" : "row"}>
                    <div className="col-lg-6 col-md-12">
                      {daysIt?.image3?.url && (
                        <div className="day1-image-3">
                          <Image
                            src={daysIt?.image3?.url}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 col-md-12">
                      {daysIt?.image4?.url && (
                        <div className="day1-image-3">
                          <Image
                            src={daysIt?.image4?.url}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={daysIt?.image4?.url ? "my-5 d-m-none" : "d-m-none"}
                >
                  <p className="p-text-4">{place_description_editor}</p>
                </div>
              </div>
            </div>
          </>
        );
      });
      return (
        <Tab
          eventKey={`Day` + dd.primary.day_num}
          title={`Day` + dd.primary.day_num}
        >
          {daysItienery}
        </Tab>
      );
    });

  return (
    <>
      <div>
        <div className="">
          <div>
            <div>
              <Tabs id="uncontrolled-tab-example">{dayNum}</Tabs>
            </div>
          </div>
        </div>
        <style jsx global>
          {experimentStyles}
        </style>
      </div>
    </>
  );
};
export default HowDoesEachDayLooks;
