module.exports = {
  siteMetadata: {
    title: "willworth.net",
    desc: "Music website of Will Worth",
    author: "Will Worth"
  },
  plugins: [

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
       excerpt_separator: `<!--- end --->`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'],
}
