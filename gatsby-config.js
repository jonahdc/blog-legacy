module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: 'A blog',
    description: 'Description',
    author: 'jonah',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
    fs({ path: `${__dirname}/posts`, name: 'posts' }),
    fs({ path: `${__dirname}/src/images`, name: 'images' }),
  ],
}

function fs({ path, name }) {
  return {
    resolve: `gatsby-source-filesystem`,
    options: { path, name },
  }
}
