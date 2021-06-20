import css from "styled-jsx/css";

export const trekStyle = css.global`
  .title-h1 {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-1 {
    line-height: 30px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
  }

  .p-text-2 {
    line-height: 24px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }

  .card-box-shadow {
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  }

  .border-line-right {
    border-right: 2px solid rgb(255, 193, 0);
  }

  .trek_fee_bg {
    background: rgba(255, 193, 0, 1);
    padding: 5px 10px;
  }

  .trek_fee_title {
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .trek_fee {
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .trek_gts {
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
  }

  .right-nav-details > ul {
    padding-left: 10px;
  }

  .right-nav-details > ul > li {
    list-style: none;
    line-height: 16px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: rgba(112, 112, 112, 1);
    text-transform: capitalize;
    padding: 6px 0;
  }

  .right-nav-details.sec-2 > ul > li {
    text-transform: uppercase;
  }

  .btn-ih-green {
    background: rgb(91, 133, 70);
    border: 0;
    padding: 3px 30px;
    border-radius: 0;
    line-height: 24px;
    text-align: center;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    width: 100%;
  }

  .rating_text {
    line-height: 24px;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    font-weight: lighter;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
  }

  .g_review_box {
    border: 2px solid rgba(109, 109, 109, 1);
    text-align: center;
    margin-top: 15px;
  }

  .trek_summary_icon {
    position: relative;
    width: 57px;
    height: 57px;
  }

  .trek_summary_title {
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    text-transform: capitalize;
    padding-top: 20px;
  }

  .trek_summary_desc {
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    text-transform: capitalize;
    color: rgba(112, 112, 112, 1);
  }

  @media only screen and (max-width: 660px) {
    .title-h1 {
      font-size: 42px;
    }

    .p-text-1 {
      font-size: 18px;
    }

    .p-text-2 {
      font-size: 16px;
    }

    .mpt-0 {
        padding-top: 0px !important;
    }

    .mpb-0 {
        padding-bottom: 0px !important;
    }
  }
`;
