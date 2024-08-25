/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-08-08 19:43:33
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-08-25 12:53:55
 * @FilePath: \Tik-Tok-Web-fully-automatic-replyd:\lulab_web_nextjs\dev\lulab_website_next_js\pages\_app.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import { UserProvider } from "../pages/context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </UserProvider>
  );
}

export default MyApp;
