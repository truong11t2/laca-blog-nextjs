// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://laca.fun', // Replace with your website URL
  generateRobotsTxt: true, // (optional)
  exclude: ['/protected'], // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
