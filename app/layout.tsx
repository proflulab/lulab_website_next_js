/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-08 03:01:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-09 19:05:37
 * @FilePath: /lulab_website_next_js/app/layout.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

"use client"

import styles from "./layout.module.css"; // 引入CSS模块
import Image from "next/image";
// import Link from 'next/link';
import React, { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [menuActive, setMenuActive] = useState(false);

  return (
    <html lang="en">
      <head>
      </head>
      <body className={styles.body}>
        <header className={`${styles.header} ${menuActive ? styles['nav-active'] : ''}`}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span className={styles['logo-title']}>LU LAB</span>
          </div>

          {/* 菜单切换按钮（汉堡菜单） */}
          {/* <div className={styles['menu-toggle']} onClick={() => setMenuActive(!menuActive)}>
            <div></div>
            <div></div>
            <div></div>
          </div> */}

          {/* 导航栏 */}
          {/* <ul className={styles['nav-links']}>
            <li><Link href="/about">关于</Link></li>
            <li><Link href="/training">训练营</Link></li>
            <li><Link href="/clubs">俱乐部</Link></li>
            <li><Link href="/apply">申请</Link></li>
            <li><Link href="/jobs">应聘</Link></li>
          </ul> */}
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
