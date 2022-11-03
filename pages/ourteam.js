import React from "react";
import Head from "next/head";

// Project components & functions
import { SetupRepo } from "components/home";
import HomeLayout from "layouts";
import { HikeHeader } from "components/ihhome";
import { createClient } from 'prismicio'
import IHFooter from "../components/Footer";
import IHTrekWithSwathi from "../components/Trek_With_Swathi";
import { OurTeamSliceZone } from "../components/ourteam";
import ScrollToTop from "react-scroll-to-top";
import { formatMenuData } from "utils/formatMenu"

/**
 * Aboutus component
 */
const ourTeam = ({ menu, doc }) => {
  if (doc && doc.data) {
    return (
      <>
        <HomeLayout>
          <Head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Team - India hikes</title>
          </Head>
          <HikeHeader menu={menu} />
          <OurTeamSliceZone sliceZone={doc.data.body} />
          <IHTrekWithSwathi />
          <IHFooter />
        </HomeLayout>
        <ScrollToTop smooth color="#000000" />
      </>
    );
  }

  // Message when repository has not been setup yet
  return <SetupRepo />;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const client = createClient({ previewData })
  const doc = await client.getSingle("hike_team")
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

export default ourTeam;
