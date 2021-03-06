const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Pomorie Apartments`,
    year: `2018`,
    languages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    },
  ]
}