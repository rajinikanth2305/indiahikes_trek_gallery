import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChooseTreks } from "styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hrefResolver, linkResolver } from "prismic-configuration";
import Link from "next/link";

const ChooseTheseTreks = ({ slice }) => {
  const heading1 = slice.primary.heading1;
  const chooseTrekImageArray = slice.items;

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

  const chooseTrekImage = chooseTrekImageArray.map(function(data, i) {
    let url;
    const slugUrl = data?.link_url.slug;
    if (slugUrl) {
      // url = linkResolver(data?.link_url);
      url = `/trek/${data.link_url.uid}`;
    }
    return (
      <>
        <div className="c-mx-2 cursor-pointer" key={`choosetrek` + i}>
          <Link href={url}>
            <div className="card_sec">
              <div className="card trek_card">
                <div alt="imgs" className="choose_trek_image">
                  {data.choose_trek_familytrek === true ? (
                    <div className="trek_badge">
                      <img src="/trek-badge.png" />
                      <span>Family Trek</span>
                    </div>
                  ) : (
                    ""
                  )}
                  <Image
                    src={data.choose_trek_image.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </div>
                <div class="px-3 py-2">
                  <div className="d-flex align-items-center card-info-text">
                    <div>
                      <p>{data.choose_trek_days[0].text} Days</p>
                    </div>
                    <div>
                      <p className="list-dot-style px-1">
                        <span>.</span>
                      </p>
                    </div>
                    <div>
                      <p>{data.choose_trek_seasons[0].text}</p>
                    </div>
                    <div>
                      <p className="list-dot-style px-1">
                        <span>.</span>
                      </p>
                    </div>
                    <div>
                      <p>{data.choose_trek_guide[0].text}</p>
                    </div>
                  </div>

                  <div>
                    <h3 class="title-diplay-3 text-uppercase">
                      {data.choose_trek_title[0].text}
                    </h3>
                    <p className="p-display-2">
                      {data.choose_trek_desc[0].text.length > 125
                        ? `${data.choose_trek_desc[0].text.substring(
                            0,
                            125
                          )}...`
                        : data.choose_trek_desc[0].text}
                    </p>
                    <div className="float-right pt-2 pb-4">
                      <button className="btn btn-ih-green">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-4 choose_trek_sec">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap border-bottom-4 mb-3">
            <div className="col-md-12">
              <h2 className="title-display-2">{RichText.asText(heading1)}</h2>
            </div>
          </div>
          <div>
            <Slider {...settings}>{chooseTrekImage}</Slider>
          </div>
        </div>
        <style jsx global>
          {ChooseTreks}
        </style>
      </div>
    </>
  );
};

export default ChooseTheseTreks;
