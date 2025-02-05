/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-11 16:54:04
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-05 19:51:58
 * @FilePath: /lulab_website_next_js/app/[locale]/not-found.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return <h1>{t('title')}</h1>;
}