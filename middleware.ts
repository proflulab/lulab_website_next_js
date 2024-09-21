/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 22:36:03
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 17:17:22
 * @FilePath: /lulab_website_next_js/middleware.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: [
        // 
        '/',
        // 
        '/(zh|en)/:path*',
        // 
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};