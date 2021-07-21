import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
Image;
import { experimentStyles } from "styles";
import { Client } from "utils/prismicHelpers";
import Prismic from "@prismicio/client";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const HowDoesEachDayLooks = () => {
  const [dayWise, setDayWise] = useState();

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
        const tt = response.results[0].data.body;
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
        const place_description_editor = daysIt.place_description_editor.map(
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
              <div className="my-5">
                <p className="p-text-1">
                  <b>{daysIt.place_title[0].text}</b>
                </p>
                <p class="p-text-3-1">
                  <img src="/Duration.png" alt="img" />{" "}
                  <span className="px-2">{daysIt.duration[0].text}</span>
                </p>
                <p class="p-text-3-1">
                  <img src="/shoes.png" alt="img" />{" "}
                  <span className="px-2">{daysIt.altitude[0].text}</span>
                </p>
                <p class="p-text-3-1">
                  <img src="/Offloading.png" alt="img" />{" "}
                  <span className="px-2">{daysIt.difficulty[0].text}</span>
                </p>
                <p class="p-text-3-1">
                  <img src="/Offloading.png" alt="img" />{" "}
                  <span className="px-2">{daysIt.water_sources[0].text}</span>
                </p>
              </div>

              <div className="row">
                <div className="col-lg-7 col-md-12">
                  <div className="day1-image-1">
                    {daysIt.image1.url ? (
                      <Image
                        src={daysIt.image1.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="day1-image-2">
                    {daysIt.image2.url ? (
                      <Image
                        src={daysIt.image2.url}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-12">
                      <div className="day1-image-3">
                        {daysIt.image3.url ? (
                          <Image
                            src={daysIt.image3.url}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="day1-image-3">
                        {daysIt.image4.url ? (
                          <Image
                            src={daysIt.image4.url}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 50%"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <p className="p-text-4">{place_description_editor}</p>
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
        <div className="container">
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
