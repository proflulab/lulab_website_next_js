/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 21:10:47
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-10 21:17:18
 * @FilePath: /lulab_website_next_js/next.config.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  // 启动SWC减少首次访问路由的编译时间
  swcMinify: true,
  images: {
    domains: ["wechatapppro-1252524126.cos.ap-shanghai.myqcloud.com"], // 添加允许的图片域名
  },
};

module.exports = withNextIntl(nextConfig);
