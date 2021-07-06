import React from "react";
import { RichText } from "prismic-reactjs";
import { trekStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CampSite = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const heading2 = slice.primary.heading2;
  const campsitesImagesArray = slice.items;

  const heading2data = heading2.map((data, i) => {
    return <p key={i}>{data.text}</p>;
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          arrows: false
        }
      }
    ]
  };

  const campsitesImages = campsitesImagesArray.map(function(data, i) {
    return (
        <>
      <div className="mx-2" key={i}>
        <div alt="imgs" className="campsites_images">
          <Image
            src={data.campsites_images.url}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        <p className="p-text-small">{data.image_desc[0].text}</p>
      </div>
      </>
    );
  });

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 mb-4">
              <h2 className="title-h2 pb-3">{RichText.asText(heading1)}</h2>
              <p className="p-text-4">{heading2data}</p>
            </div>
          </div>
          <div className="mt-4 mb-5 pb-5">
            <Slider {...settings}>{campsitesImages}</Slider>
          </div>
        </div>
        <style jsx global>
          {trekStyle}
        </style>
      </div>
    </>
  );
};

export default CampSite;