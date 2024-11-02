/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-02 15:21:01
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-03 01:14:07
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
    domains: ["wechatapppro-1252524126.cos.ap-shanghai.myqcloud.com"], // 添加允许的图片域名
  },
};

export default withNextIntl(nextConfig);
