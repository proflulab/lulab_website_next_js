/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-08-08 19:43:33
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-08-25 13:53:18
 * @FilePath: \Tik-Tok-Web-fully-automatic-replyd:\lulab_web_nextjs\dev\lulab_website_next_js\app\layout.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { UserProvider } from "../pages/context/UserContext"; // 导入 UserProvider
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lu Lab",
  description: "Lu Lab",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark dark h-full bg-white">
      <body className="h-full">
        <AppRouterCacheProvider>
          <UserProvider>{children}</UserProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
