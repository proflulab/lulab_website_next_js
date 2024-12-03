/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-08 03:01:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-28 15:46:18
 * @FilePath: /lulab_website_next_js/app/[locale]/layout.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import "./globals.css";
import Navbar from '@/components/navbar/navbar';
import { Footer } from '@/components/footer';



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
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <React.StrictMode>
              <Navbar />
            </React.StrictMode>
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}