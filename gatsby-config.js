module.exports = {
siteMetadata: {
  title: 'N. Brockhoff',
  desc: 'The web development portfolio of Noelle Brockhoff.'
},
plugins: [
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: "5zzh32r9cg06",
      accessToken: "885c5f82b1b3f71d70e39c693737653477c506749ee5cfb4fcca126cadaeb64a"
    }
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "src",
      path: `${__dirname}/src/`
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "img",
      path: `${__dirname}/src/images`
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: "src",
      path: `${__dirname}/static/assets`
    }
  }, 
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-transformer-remark'
]
};
