/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dev.lulabs.cn/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/private/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/private/" },
    ],
  },
};
