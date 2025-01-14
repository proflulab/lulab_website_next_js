// next.config.mjs
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "wechatapppro-1252524126.cos.ap-shanghai.myqcloud.com",
      "images.unsplash.com",
    ],
  },

  async redirects() {
    return [
      {
        source: "/agreement.html",
        destination: "/zh/agreement.html",
        permanent: true,
      },
    ];
  },

  siteUrl: "https://dev.lulabs.cn/",
  generateRobotsTxt: true,
  generateSitemap: true,
};

export default withNextIntl(nextConfig);
