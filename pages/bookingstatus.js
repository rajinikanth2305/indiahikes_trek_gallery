import React from "react";
import Head from "next/head";
import { createClient } from 'prismicio'
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { Client } from "utils/prismicHelpers";
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { formatMenuData } from "utils/formatMenu"

/**
 * UpComing component
 */
const BookingStatus = ({ menu, doc }) => {
  return (
    <HomeLayout>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Booking Status</title>
      </Head>
      <HikeHeader menu={menu} />
      {/* <UpComingTreksSliceZone sliceZone={doc.data.body} /> */}
      <div className="mt-5 py-5 text-center">
        <h3>Booking Status</h3>
        <h4>Booking Status confirmed</h4>
      </div>
      <IHTrekWithSwathi />
      <IHFooter />
    </HomeLayout>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = createClient({ previewData })
  const doc = await client.getSingle("hike_upcoming_treks_ctype")
  const menuData = await client.getSingle("custom_menu")
  const menu = formatMenuData(menuData.data.body)

  return {
    props: {
      menu,
      doc,
      preview,
    },
  };
}

export default BookingStatus;
