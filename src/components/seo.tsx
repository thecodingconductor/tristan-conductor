import React from "react";

import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  title?: string;
  description?: string;
};

const SEO = ({ title, description }: Props) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {/* {seo.image && <meta property="og:image" content={seo.image} />} */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {/* {seo.image && <meta name="twitter:image" content={seo.image} />} */}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }
  }
`;

SEO.defaultProps = {
  title: null,
  description: null,
};
