import React from "react";
import { RichText } from "prismic-reactjs";
import { upcomingTrekPageStyle } from "styles";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UCTreksToDo = ({ slice }) => {
  const ucTreksToDoTitle = slice.primary.uc_treks_to_do_title;
  const ucTreksToDoDesc = slice.primary.uc_treks_to_do_desc;
  const ucTreksToDoImagesArray = slice.items;

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
          arrows: false
        }
      }
    ]
  };

  const ucTreksToDoImages = ucTreksToDoImagesArray.map(function(data, i) {
    return (
      <>
        <div className="mx-2" key={i}>
          <div className="card_sec">
            <div className="card trek_card">
              <div alt="imgs" className="uc_open_for_small_group_images">
                {data.uc_treks_to_do_family_trek === true ? (
                  <div className="trek_badge">
                    <img src="./trek-badge.png" />
                    <span>Family Trek</span>
                  </div>
                ) : (
                  ""
                )}
                <Image
                  src={data.uc_treks_to_do_images.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
              <div class="px-3 py-2">
                <div className="d-flex align-items-center card-info-text">
                  <div>
                    <p>{data.uc_treks_to_do_days[0].text} Days</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.uc_treks_to_do_seasons[0].text}</p>
                  </div>
                  <div>
                    <p className="list-dot-style px-1">
                      <span>.</span>
                    </p>
                  </div>
                  <div>
                    <p>{data.uc_treks_to_do_guide[0].text}</p>
                  </div>
                </div>

                <div>
                  <h3 class="title-diplay-3 text-uppercase">
                    {data.uc_treks_to_do_image_caption[0].text}
                  </h3>
                  <p className="p-display-2">
                    {data.uc_treks_to_do_image_caption_desc[0].text.length >
                    125
                      ? `${data.uc_treks_to_do_image_caption_desc[0].text.substring(
                          0,
                          125
                        )}...`
                      : data.uc_treks_to_do_image_caption_desc[0].text}
                  </p>
                  <div className="float-right pt-2 pb-4">
                    <button className="btn btn-ih-green">View Details</button>
                  </div>
                </div>
              </div>
            </div>
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
              <h2 className="title-display-2">
                {RichText.asText(ucTreksToDoTitle)}
              </h2>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="p-display-1">
                {RichText.asText(ucTreksToDoDesc)}
              </p>
            </div>
          </div>
          <div>
            <Slider {...settings}>{ucTreksToDoImages}</Slider>
          </div>
        </div>
        <style jsx global>
          {upcomingTrekPageStyle}
        </style>
      </div>
    </>
  );
};

export default UCTreksToDo;