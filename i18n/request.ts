/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 21:18:01
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-28 19:33:18
 * @FilePath: /lulab_website_next_js/i18n/request.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
