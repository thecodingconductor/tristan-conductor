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
import HomePageBio from "../components/atoms/HomePageBio/HomePageBio";

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

const dummyBio = {
  bioText:
    "Driven by the mission to create the future of classical music through unconventional and innovative means, Tristan has been building audiences on digital platforms such as Twitch, and exploring the possibilities of combining classical music with interactive mediums. His aim is nothing less than to blaze a new path for the future of classical music—one that is exciting, inclusive, and engaging. He is the recipient of the Friedlander Family Presidential Scholarship, and is the inaugural Artist Diploma in Orchestral Conducting at New England Conservatory.",
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
      <HomePageNewsItem
        newsDate={dummyNewsItem.newsDate}
        newsTitle={dummyNewsItem.newsTitle}
      />
      <Divider />
      <HomePageBio bioText={dummyBio.bioText} />
    </Layout>
  );
};

export default IndexPage;
