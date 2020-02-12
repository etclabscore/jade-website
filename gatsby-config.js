const emoji = require("remark-emoji");

module.exports = {
  pathPrefix: "/pristine-typescript-gatsby-react-material-ui",
  siteMetadata: {
    title: `Jade`,
    description: ``,
    logoUrl: `https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png`,
    primaryColor: `#3f51b5`, //material-ui primary color
    secondaryColor: `#f50057`, //material-ui secondary colo
    author: ``,
    menuLinks: [
      {
        name: "Home",
        link: "/",
        ignoreNextPrev: true
      },
      {
        name: "Getting Started",
        link: "/getting-started"
      },
      {
        name: "Topic Guides",
        link: "/topic-guides"
      },
      {
        name: "API Documentation",
        link: "/api-documentation"
      }
    ],
    footerLinks: [
      {
        name: "Github",
        link: "https://github.com/etclabscore/jade-service-runner"
      }
    ]
  },
  plugins: [
    "@etclabscore/gatsby-theme-pristine",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pristine-site`,
        short_name: `pristine-site`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/jade-icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
