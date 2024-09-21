/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 22:10:35
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 00:51:18
 * @FilePath: /lulab_website_next_js/i18n/routing.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['zh', 'en'],

    // Used when no locale matches
    defaultLocale: 'zh',
    pathnames: {
        '/': '/',

    }

});

export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);