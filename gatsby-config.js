// const { languages, defaultLanguage } = require("./languages")
module.exports = {
  siteMetadata: {
    title: `Rentlio Hoteli Hr`,
    author: {
      name: `Rentlio`,
      summary: `Rentlio Hotel Landing Page`,
    },
    description: `Rentlio Hotel Landing Page`,
    siteUrl: `https://localhost:8003/`,
    social: {
      twitter: `Rentlio`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/public/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:400,500,700,900`, `Barlow\:600`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-i18next`,
    //   options: {
    //     localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
    //     languages: [`en`, `hr`],
    //     defaultLanguage: `hr`,

    //     // if you are using Helmet, you must include siteUrl, and make sure you add http:https
    //     siteUrl: `https://example.com/`,
    //     // you can pass any i18next options
    //     i18nextOptions: {
    //       interpolation: {
    //         escapeValue: false, // not needed for react as it escapes by default
    //       },
    //       keySeparator: false,
    //       nsSeparator: false,
    //     },
    //     pages: [
    //       {
    //         matchPath: "/:lang?",
    //         getLanguageFromPath: false,
    //         // excludeLanguages: ["es"],
    //       },
    //       {
    //         matchPath: "/preview",
    //         languages: ["en", "hr"],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
