/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-08 03:01:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 04:10:13
 * @FilePath: /lulab_website_next_js/app/[locale]/layout.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import AppNav from '../../components/navbar/navbar';
import BottomBar from '../../components/bottombar/bottombar';

import React from 'react';
import "./globals.css";



export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string };
}) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
      </head>
      <body><NextIntlClientProvider messages={messages}>
        <React.StrictMode>
          <AppNav />
        </React.StrictMode>
        <main>
          {children}
        </main>
        <React.StrictMode>
          <BottomBar />
        </React.StrictMode>
      </NextIntlClientProvider>
      </body>
    </html>
  )
}