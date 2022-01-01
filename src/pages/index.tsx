/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import HeadlineHero from "../components/atoms/HeadlineHero/HeadlineHero";
import { useStaticQuery, graphql } from "gatsby";
import HeroContainer from "../components/molecules/HeroContainer/HeroContainer";
import HomePageVideo from "../components/atoms/HomePageVideo/HomePageVideo";
import HomePageVideoSubtitle from "../components/atoms/HomePageVideoSubtitle/HomePageVideoSubtitle";
import Divider from "../components/atoms/Divider/Divider";
import HomePageNewsItem from "../components/atoms/HomePageNewsItem/HomePageNewsItem";

const headerComponentStyles = {
  background: "white",
  fontFamily: "heading",
  color: "#000",
};

const dummyNewsItem = {
  newsDate: "05.20.2021",
  newsTitle:
    "Tristan to compete in the the Khachaturian International Conducting Competition 2021 in Armenia",
};

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSiteCopy {
        heroHeadline {
          heroHeadline
        }
      }
    }
  `);

  const HeaderComponent = () => (
    <div>
      <div>
        <h1
          sx={{
            ...headerComponentStyles,
          }}
        >
          Tristan Rais-Sherman,
        </h1>
      </div>
      <div>
        <h1
          sx={{
            ...headerComponentStyles,
          }}
        >
          Conductor
        </h1>
      </div>
    </div>
  );

  return (
    <Layout>
      <HeroContainer
        heroHeadline={data.contentfulSiteCopy.heroHeadline.heroHeadline}
        headerElement={<HeaderComponent />}
      />
      <HomePageVideo
        videoSrcURL={"https://www.youtube.com/embed/wct93OnrrYA"}
        videoTitle={
          "Tristan Rais-Sherman, Mozart Symphony. 29, NEC Philharmonia"
        }
      />
      <HomePageVideoSubtitle />
      <Divider />
      <HomePageNewsItem
        newsDate={dummyNewsItem.newsDate}
        newsTitle={dummyNewsItem.newsTitle}
      />
    </Layout>
  );
};

export default IndexPage;
