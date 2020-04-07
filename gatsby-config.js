module.exports = {
  //  Temporarily adding a path prefix whilst its hosted on GH pages
  pathPrefix: '/ctc-web',
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-162050414-2',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carry Through COVID`,
        short_name: `ctc-web`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ctc-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
