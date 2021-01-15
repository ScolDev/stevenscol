module.exports = {
  siteMetadata: {
    title: 'StevensCol',
    url: 'https://stevenscol.netlify.app',
    siteUrl: 'https://stevenscol.netlify.app',
    heroTitle: '"Estúpido como un zorro."',
    author: 'Stevens Pineda',
    description: 'Un punto de entrada a los trabajos, pensamientos y temas variados que deseo compartir en este mi sitio web personal.',
    blogPostPrefixPath: '/blog',
    blogPostsPaginatePrefixPath: '/blog/page',
    social: [
      'github#https://github.com/StevensCol',
      'twitter#http://twitter.com/stevenspineda',
      'instagram#https://instagram.com/stevenscls',
      'email#stevenspineda@gmail.com'
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'stevenscol'
      }
    },
  ],
};
