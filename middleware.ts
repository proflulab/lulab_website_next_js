/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 22:36:03
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-10-31 12:17:27
 * @FilePath: /lulab_website_next_js/middleware.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "@/auth";


export const config = {
    // Match only internationalized pathnames
    matcher: [
        // 
        '/',
        // 
        // '/(zh|en)/:path*',
        // 
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};

export default auth(function handler(req) {
    const reqUrl = new URL(req.url);
    // if (!req.auth && reqUrl.pathname !== "/") {
    //     return NextResponse.redirect(
    //         new URL(
    //             `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
    //             req.url
    //         )
    //     );
    // }

    return createMiddleware(routing)(req);
});