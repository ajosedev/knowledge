module.exports = {
  siteMetadata: {
    title: 'Andrew\'s Digital Garden',
    // description: '',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-garden',
      options: {
        rootNote: '/README',
        contentPath: `${__dirname}/notes`,
        parseWikiLinks: true,
      },
    },
  ],
};
