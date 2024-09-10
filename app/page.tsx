/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 01:59:14
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-10 17:40:43
 * @FilePath: /lulab_website_next_js/app/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import React from "react";
import { Image } from "@nextui-org/react";
import styles from './home.module.css'; // Import the CSS module

const Home: React.FC = () => {
  return (
    <>
      <Image
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
        zIndex: 1000,  // 确保文字在最顶层
      }}>
        学理论不如学案例<br />
        学案例不如做案例<br />
        做案例不如玩案例<br />
        一个人玩不如一起玩<br />
        一起玩不如聚天下英才名师一块玩
      </div>
    </>
  );
};

export default Home;
