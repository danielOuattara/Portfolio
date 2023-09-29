// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// module.exports = {
//   plugins: [],
// }

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Fullstack Portfolio",
    description:
      "Portfolio website where I present myself and show my skills on different kind of projects and using a wide range of effective web design technologies. From the contact page, everybody can contact me",
    titleTemplate: `%s | Fullstack Portfolio `,
    siteUrl: "https://daniel-gatsby-strapi-portfolio.netlify.app",
    image: "/mainImg.png",
    linkedInUsername: "daniel-b-ouattara-677146ab",
    twitterUsername: "@danielOuattara",
    about_me:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodiaperiam officiis nostrum maxime reprehenderit, totam eaque corporisrepudiandae soluta quos neque omnis dolore quibusdam aliquam,consectetur excepturi error suscipit.",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // The unique name for each instance
        path: `${__dirname}/src/assets/images`, // Path to the directory
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `examples`, // The unique name for each instance
    //     path: `${__dirname}/src/components/examples`, // Path to the directory
    //   },
    // },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
