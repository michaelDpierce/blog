require('dotenv').config()

module.exports = {
  env: {
    HOST_URL:
      process.env.HOST_URL || 'http://localhost:3000',
    LANGUAGE_LOCALE:
      process.env.LANGUAGE_LOCALE || 'en-us',
    PRISMIC_API_TOKEN:
      process.env.PRISMIC_API_TOKEN,
    PRISMIC_REPOSITORY_NAME:
      process.env.PRISMIC_REPOSITORY_NAME
  },
}
