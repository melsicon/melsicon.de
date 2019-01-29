module.exports = {
  title: 'melsicon blog',
  description: 'melsicon GmbH company blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://melsicon.netlify.com', external: true }
    ],
    authors: [
      {
        name: 'Victoria Bergquist',
        title: 'Frontend Developer',
        img: 'victoria.jpg',
        links: {
          twitter: '#',
          linkedin: '#',
          github: '#'
        }
      },
      {
        name: 'Makele Ghebreamlak',
        title: 'Geschäftsführer / Backend Entwickler',
        img: 'makele.jpg',
        links: {
          linkedin: 'https://www.linkedin.com/in/makelefy/',
          xing: 'https://www.xing.com/profile/Makele_Ghebreamlak/',
          twitter: 'https://twitter.com/makelefy'
        }
      },
      {
        name: 'Amir Wasim',
        title: 'Senior Berater / Backend Entwickler',
        img: 'amir.jpg',
        links: {
          xing: 'https://www.xing.com/profile/Amir_Wasim/'
        }
      },
      {
        name: 'Meike Hankewicz',
        title: 'Software Entwicklerin',
        img: 'meike.jpg',
        links: {
          twitter: 'https://twitter.com/meikewicz',
          linkedin: 'https://www.linkedin.com/in/meike-h/',
          github: 'https://github.com/Schlenges'
        }
      },
      {
        name: 'Alexander Figul',
        title: 'Geschäftsführer / Fullstack Entwickler',
        img: 'alex.jpg',
        links: {
          xing: 'https://www.xing.com/profile/Alexander_Figul/',
          linkedin: 'https://www.linkedin.com/in/alexander-figul-b800a128/',
          github: 'https://github.com/afigul'
        }
      },
      {
        name: 'Bastian Baist',
        title: 'Backend Entwickler',
        img: 'bastian.jpg',
        links: {
          xing: 'https://www.xing.com/profile/Bastian_Baist/',
          twitter: 'https://twitter.com/Miiepser'
        }
      },
      {
        name: 'Sarah Kesete',
        title: 'Assistentin der Geschäftsführung',
        img: 'sarah.jpg',
        links: {
          xing: 'https://www.xing.com/profile/Sarah_Kesete/',
          linkedin: 'https://www.linkedin.com/in/sarah-kesete-63b02b156/'
        }
      }
    ]
  },
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-59119788-4'
      }
    ]
  ],
  head: [
    ['script', { async: true, src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }]
  ]
}
