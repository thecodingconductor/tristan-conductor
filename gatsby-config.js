require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Tristan Rais-Sherman, Conductor",
    titleTemplate: "%s · A modern musician",
    description: "Official Website of American conductor, Tristan Rais-Sherman",
    url: "https://www.trsconductor.com",
    twitterUsername: "@tristanconducts",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "m0Ne4wH9dRyFBgTlSLwDXPt5MmhAtCGDdVR-zoEPJig",
        spaceId: "98v9r5naa8iu",
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-146136259-1",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    // {
    //   resolve: "gatsby-source-instagram-all",
    //   options: {
    //     access_token: process.env.GATSBY_INSTAGRAM,
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-146136259-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    // {
    //   resolve: "gatsby-source-instagram",
    //   options: {
    //     username: "200694142",
    //   },
    // },
  ],
};
