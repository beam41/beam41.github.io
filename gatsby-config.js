module.exports = {
  siteMetadata: {
    title: `Phumdol Portfolio`,
    description: `Welcome to my portfolio website build w/ gatsby`,
    author: `@beam41`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Phumdol Portfolio`,
        short_name: `Phumdol`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#242424`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-mini-css-class-name`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
