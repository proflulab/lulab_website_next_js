/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 01:59:14
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-02 14:50:53
 * @FilePath: /lulab_website_next_js/app/[locale]/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import React from "react";
import { redirect } from 'next/navigation';

const Home: React.FC = () => {
  redirect('/home'); // 直接重定向到 /home
};

export default Home;
