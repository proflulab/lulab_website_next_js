/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 21:18:01
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-10 22:36:42
 * @FilePath: /lulab_website_next_js/i18n/request.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});