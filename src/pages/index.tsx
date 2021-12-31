/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/Layout";
import HeadlineHero from "../components/atoms/HeadlineHero/HeadlineHero";
import { useStaticQuery, graphql } from "gatsby";

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

  console.log(data);
  console.log(data.contentfulSiteCopy.heroHeadline.heroHeadline);

  return (
    <Layout>
      <HeadlineHero
        heroHeadline={data.contentfulSiteCopy.heroHeadline.heroHeadline}
      />
    </Layout>
  );
};

export default IndexPage;
