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
    skills: 'Buenas prácticas en el desarrollo de software (Clean Code, TDD, Patrones de diseño). Principales tecnologías web Javascript (Nodejs, Angular, React). Proceso de desarrollo en equipos con las mejores prácticas y estrategias (Git, Gitflow, CI/CD). Comunicación acertiva y apasionado por el aprendizaje y la enseñanza.',
    experience: 'Más de 5 años de experiencia laboral en diferentes compañias de software. Diseño y construcción de aplicaciones web (Fronted y Backend), desarrollo de aplicaciones móviles para Android, prácticas y documentación de análisis en ingeniería inversa de software como pasatiempo, entre otras.',
    description: 'Punto de encuentro de trabajos personales y documentación de mis aprendizajes.',
    twitterID: '@Scol_Dev',
    blogPostPrefixPath: '/blog',
    blogPostsPaginatePrefixPath: '/blog/page',
    social: [
      'github#https://github.com/StevensCol',
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
