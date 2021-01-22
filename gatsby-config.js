module.exports = {
  siteMetadata: {
    title: 'StevensCol',
    url: 'https://stevenscol.netlify.app',
    siteUrl: 'https://stevenscol.netlify.app',
    heroTitle: '"Estúpido como un zorro."',
    author: 'Stevens Pineda',
    bio: 'Ingeniero de Sistemas y Computación, Desarrollador Web Full Stack en Javascript, Autodidacta y Reverser de Pasión.',
    skills: '- Javascript - Node.js - Html - CSS - React - Gatsby - Angular - Git - Responsive Design - Java - Android Dev - Assembler - Reversing - Shell Scripting - Self Taught -',
    experience: 'Más de 5 años de experiencia laboral en diferentes compañias de software. Diseño y construcción de aplicaciones web (Fronted y Backend), desarrollo de aplicaciones móviles para Android, prácticas y documentación de análisis en ingeniería inversa de software como pasatiempo, entre otras.',
    description: 'Un punto de entrada a los trabajos, pensamientos y temas variados que deseo compartir en este mi sitio web personal.',
    blogPostPrefixPath: '/blog',
    blogPostsPaginatePrefixPath: '/blog/page',
    social: [
      'github#https://github.com/StevensCol',
      'twitter#http://twitter.com/stevenspineda',
      'instagram#https://instagram.com/stevenscls',
      'email#mailto:stevenspineda@gmail.com'
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
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'stevenscol'
      }
    },
  ],
};
