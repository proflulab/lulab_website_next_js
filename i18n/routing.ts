/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 22:10:35
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-29 04:44:45
 * @FilePath: /lulab_website_next_js/i18n/routing.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['zh', 'en'],

    // Used when no locale matches
    defaultLocale: 'zh',

});


// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);