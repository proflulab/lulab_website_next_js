/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 01:59:14
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-29 18:09:31
 * @FilePath: /lulab_website_next_js/app/[locale]/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import React from "react";
import { Image } from "@nextui-org/react";
import styles from './home.module.css'; // Import the CSS module
import { useTranslations } from 'next-intl';

/**
 * Home组件
 * 
 * 该组件代表网站的主页，展示了一张领导力相关的图片和主页的概念文字
 * 使用了模块化的CSS样式，并国际化支持了主页内容的动态加载
 */
const Home: React.FC = () => {
  // 使用国际化工具加载主页相关的翻译内容
  const t = useTranslations('HomePage') || 'Default Concept Text';;

  return (
    <>
      {/* 显示一张领导力相关的全屏图片 */}
      <Image
        src="/images/leadership.jpg"
        alt="Leadership"
        className={styles.fullImage}  // 使用模块化的CSS类
      />

      {/* 在指定位置展示主页的概念文字 */}
      <div className={styles.textContainer}>
        {t('concept')}
      </div>
    </>
  );
};

export default Home;
