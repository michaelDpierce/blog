require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    FATHOM_SITE: process.env.FATHOM_SITE,
    HOST_URL: process.env.HOST_URL || 'https://mpierce.blog',
    LANGUAGE_LOCALE: process.env.LANGUAGE_LOCALE || 'en-us',
    PRISMIC_API_TOKEN: process.env.PRISMIC_API_TOKEN,
    PRISMIC_REPOSITORY_NAME: process.env.PRISMIC_REPOSITORY_NAME,
  },
};