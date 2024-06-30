/** @type {import("@/components/pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'La Cà',
  author: 'Trường Hoàng',
  headerTitle: 'La Cà',
  description:
    'Trang du lịch cho mọi người. Nơi chia sẻ kinh nghiệm để bạn có thể du lịch tự túc một cách hoàn toàn',
  language: 'vi',
  siteUrl: 'https://laca.fun',
  siteRepo: 'https://github.com/truong11t2',
  image: '/static/img/avatar.png',
  socialBanner: '/static/img/social-banner.png',
  email: 'truong11t2@gmail.com',
  github: 'https://github.com/truong11t2',
  twitter: 'https://twitter.com/truong11t2',
  linkedin: 'https://www.linkedin.com/in/hoangxuantruong',
  locale: 'vi-VN',
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-EPZNC25ED9', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'emailoctopus',
  },
  comment: {
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: '', // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '', // supported options: pathname, url, title
      reactions: '', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: '',
      // theme when dark mode
      darkTheme: '',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      repo: '', // username/repoName
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: '',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
