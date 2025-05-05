/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-08 03:01:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-31 05:34:18
 * @FilePath: /lulab_website_next_js/app/[locale]/layout.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import "./globals.css"; // 确保 globals.css 路径正确
import { Toaster } from "@/components/ui/toaster";
import AICustomerService from '@/components/AICustomerService';
import { Inter } from 'next/font/google'; // 假设您使用了 Inter 字体，需要导入

const inter = Inter({ subsets: ['latin'] }); // 定义 inter

export const metadata = {
  title: 'Lu Lab',
  description: 'Lu Lab Website',
};

export default async function RootLayout({ children, params }: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 从 params 中解构 locale - 需要 await
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} style={{ height: '100%' }}>
      <body className={inter.className} style={{ 
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden'
      }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* 可能有 Header 组件 */}
          {/* <Header /> */}

          {/* 使用 main 标签包裹主要内容 */}
          <main style={{ flex: 1, minHeight: 0 }}>
            {children}
          </main>

          {/* 可能有 Footer 组件 */}
          {/* <Footer /> */}

          {/* 将 Toaster 和 AICustomerService 移到 Provider 内部，通常在 main 之后 */}
          <Toaster />

          {/* ---- 恢复 AI 客服组件 ---- */}
          <div className="ai-customer-service-container" style={{ 
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 999 
          }}>
            <AICustomerService
              floatButtonStyle={{
                position: 'bottom-right',
                size: 'md',
                backgroundColor: '#3B82F6',
              }}
              chatWindowStyle={{
                position: 'right',
                primaryColor: '#3B82F6',
                width: 280,
                height: 450,
                bottom: '20px',  // 新增底部间距
                right: '20px'    // 新增右侧间距
              }}
              botConfig={{
                botId: process.env.NEXT_PUBLIC_COZE_BOT_ID || '7499463698092867610',
                token: process.env.NEXT_PUBLIC_COZE_TOKEN || 'pat_Fwblbh8a2uuM3ybShZbdebuAwOEkpTvre65wgEFvoAh6nAtbBulkN7zykwks37hi',
                language: locale === 'en' ? 'en' : 'zh',
              }}
              defaultOpen={false}
              autoShowDelay={0}
            />
          </div>
          {/* ---- 恢复结束 ---- */}

        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// 移除函数定义外部的所有 JSX 和多余的闭合标签
