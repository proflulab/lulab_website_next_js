/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 01:59:14
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-29 20:14:26
 * @FilePath: /lulab_website_next_js/app/[locale]/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import React from "react";
import { Image } from "@nextui-org/react";
import styles from './home.module.css'; // Import the CSS module
import { useTranslations } from 'next-intl';
import { Hero } from "@/components/sections/Hero";

const Home: React.FC = () => {

  const t = useTranslations('HomePage');

  return (
    <>
      <Hero />
      {/* <Image
        src="/images/leadership.jpg"
        alt="Leadership"
        className={styles.fullImage}  // 使用模块化的CSS类
      />

      <div style={{
        position: 'absolute',
        top: '35%',  // 根据图片中的位置进行调整
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '24px',
        width: '60%',  // 控制文字区域宽度
        backgroundColor: 'rgba(0,0,0,0.5)',  // 文字背景透明度
        padding: '20px',
        borderRadius: '10px',
        zIndex: 10,  // 调整z-index使得文字显示在图片之上但低于其他重要元素
        whiteSpace: 'pre-wrap'  // 使换行符和空白符格式正确显示
      }}>
        {t('concept')}
      </div> */}
    </>
  );
};

export default Home;
