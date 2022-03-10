import React from "react";
import {
  ArticleHome,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7
} from "./slices";

/**
 *  slice zone component
 */

const ArticlesSliceZone = ({
  sliceZone,
  articleTabsList,
  section1DataList,
  primaryArticleData,
  mostReadarticleData,
  latestPrimaryArticleData,
  latestArticleData,
  hikesNewsData,
  trekkingprimaryArticleData,
  trekkingArticleData,
  highAlititudeData,
}) =>
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case "articles_tab":
        return (
          <ArticleHome
            slice={slice}
            key={`slice-${index}`}
            articleTabsList={articleTabsList}
            section1DataList={section1DataList}
            primaryArticleData={primaryArticleData}
            latestArticleData={latestArticleData}
          />
        );
      case "articles_videos":
        return <Section2 slice={slice} key={`slice-${index}`} />;
      case "most_read_articles":
        return (
          <Section3
            slice={slice}
            key={`slice-${index}`}
            mostReadarticleData={mostReadarticleData}
          />
        );
      case "latest_articles":
        return (
          <Section4
            slice={slice}
            key={`slice-${index}`}
            latestPrimaryArticleData={latestPrimaryArticleData}
            latestArticleData={latestArticleData}
          />
        );
      case "hike_news_articles":
        return (
          <Section5
            slice={slice}
            key={`slice-${index}`}
            hikesNewsData={hikesNewsData}
          />
        );
      case "high_altitude_research":
        return (
          <Section6
            slice={slice}
            key={`slice-${index}`}
            highAlititudeData={highAlititudeData}
          />
        );
      case "trekking_tips":
        return (
          <Section7
            slice={slice}
            key={`slice-${index}`}
            trekkingprimaryArticleData={trekkingprimaryArticleData}
            latestArticleData={latestArticleData}
            trekkingArticleData={trekkingArticleData}
          />
        );
      default:
        return null;
    }
  });
export default ArticlesSliceZone;
