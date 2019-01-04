module.exports = {
  siteMetadata: {
    siteUrl: `https://www.inextenso-js.com`,
    title: 'In Extenso JS | The blog: javascript, programming, life',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `oxygen\:300`,
          `source sans pro\:300`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Meletto',
        start_url: '/',
        background_color: '#141414',
        theme_color: '#141414',
        display: 'minimal-ui',
        icon: 'static/img/favicon-2.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
