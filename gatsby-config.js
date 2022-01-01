module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "second-attempt",
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
    "gatsby-plugin-emotion",
    "gatsby-plugin-typescript",
  ],
};
