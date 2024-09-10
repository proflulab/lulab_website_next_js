/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-08 03:01:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-10 16:42:25
 * @FilePath: /lulab_website_next_js/app/layout.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */


import AppNav from './_components/navbar/navbar';
import React from 'react';
import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  params: {
    tag: string
    item: string
  }
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body >
        <React.StrictMode>
          <AppNav />
        </React.StrictMode>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}