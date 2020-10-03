const dotenv = require('dotenv');
dotenv.config({ path: '.env' });


module.exports = {
  siteMetadata: {
    title: `Pizza`,
    siteUrl: `https://gatsby.pizza`,
    description: `Best pizza in Helsinki`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'knu8v4yr',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    }
  ]
}
