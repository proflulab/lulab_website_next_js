/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-22 20:48:10
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-22 21:11:48
 * @FilePath: /lulab_website_next_js/next.config.mjs
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "wechatapppro-1252524126.cos.ap-shanghai.myqcloud.com",
      "images.unsplash.com",
    ], // 添加允许的图片域名
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

export default withNextIntl(nextConfig);
