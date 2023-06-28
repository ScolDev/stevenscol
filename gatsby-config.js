require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'StevensCol',
    url: 'https://stevenscol.co',
    siteUrl: 'https://stevenscol.co',
    youtubeChannel: 'https://youtube.com/c/ScolDev',
    heroTitle: '"Estúpido como un zorro."',
    author: 'Stevens Pineda',
    nickname: 'ScolDev',
    bio: 'Ingeniero Fullstack Javascript, Reverser y Autodidacta desde tiempos inmemorables. Apasionado por los bytes 🔥',
    skills: 'Arquitectura de Software, liderazgo técnico, buenas prácticas en el desarrollo de software (Clean Code, TDD, Patrones de diseño). Principales tecnologías web Javascript (Nodejs, TypeScript, Angular, React). Gestión efectiva de proyectos de software mediante el versionamiento con Git y estrategias como Gitflow. Comunicación asertiva y apasionado por el aprendizaje y la enseñanza.',
    experience: 'He estado en la industria desde 2011, desempeñando roles como desarrollador front-end y full-stack, líder técnico y recientemente como arquitecto de software; diseñando y construyendo múltiples aplicaciones web, haciendo uso de servicios en la nube con Amazon Web Services (AWS), desarrollo de aplicaciones móviles híbridas y nativas (Android).',
    description: 'Aquí reuno algunas de las cosas que me apasionan.',
    twitterID: '@Scol_Dev',
    blogPostPrefixPath: '/blog',
    blogPostsPaginatePrefixPath: '/blog/page',
    social: [
      'github#https://github.com/ScolDev',
      'youtube#https://youtube.com/c/ScolDev',
      'twitter#http://twitter.com/Scol_Dev',
      'email#mailto:yo@stevenscol.co'
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ['UCoCtdH3-_LtXtzbABowINiA'],
        apiKey: process.env.YOUTUBE_API_KEY,
        maxVideos: 3
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-7LTQBMZYJR"
        ],
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
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
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
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: false
            },
          },
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
  ],
};
