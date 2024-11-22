/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 21:10:47
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-03 04:34:15
 * @FilePath: /lulab_website_next_js/next.config.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["wechatapppro-1252524126.cos.ap-shanghai.myqcloud.com"], // 添加允许的图片域名
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
};

module.exports = withNextIntl(nextConfig);
