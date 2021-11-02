import React from "react";
import { RichText } from "prismic-reactjs";
import { customStyles } from "styles";
import Image from "next/image";
/**
 * FT Slice Components
 */
const TrekExp = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const detailsList = slice.primary.details;
  const imageUrl = slice.primary.image.url;

  const details = detailsList.map((data, i) => {
    return (
      <p className="p-text-4 fl-style" key={`ft-${i}`}>
        {data.text}
      </p>
    );
  });

  return (
    <>
      <div>
        <div className="m-d-none">
          <div className="mb-5">
            <div className="container">
              <div className="row my-5 pt-4">
                <div className="col-lg-6 col-md-12 pr-5p">
                  <div className="ft-image mt-5 pt-2">
                    <Image
                      src={imageUrl}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <h2 className="mt-h2 pb-08">{RichText.asText(heading1)}</h2>
                  <div>{details}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-d-block">
          <div className="mb-5">
            <div className="container">
              <div className="row pt-4">
                <div className="col-lg-6 col-md-12">
                  <h2 className="mt-h2 pb-08">{RichText.asText(heading1)}</h2>
                </div>
                <div className="col-lg-6 col-md-12 pr-5p">
                  <div className="ft-image mb-4">
                    <Image
                      src={imageUrl}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="bottom"
                    />
                  </div>
                  <p className="p-text-4">{details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx global>
          {customStyles}
        </style>
      </div>
    </>
  );
};

export default TrekExp;
