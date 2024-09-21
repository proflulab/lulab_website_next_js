"use client"; // 标记为客户端组件

import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { useTranslations } from 'next-intl';

const Home: React.FC = () => {
  const t = useTranslations('HomePage');

  // 定义 state 来判断是否为移动设备
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // 函数判断屏幕宽度是否小于等于768px
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 移动端宽度阈值
    };

    handleResize(); // 初始化判断
    window.addEventListener("resize", handleResize); // 监听窗口大小变化

    return () => {
      window.removeEventListener("resize", handleResize); // 清除监听器
    };
  }, []);

  return (
    <>
      <Image
        src="/images/leadership.jpg"
        alt="Leadership"
        style={{
          width: isMobile ? 'auto' : '210vh',
          height: isMobile ? 'auto' : '100vh', // 移动端为auto，桌面版占满整个屏幕高度
          objectFit: 'cover', // 保证图片在高度和宽度都覆盖的情况下裁剪
        }}
      />

      <div 
        style={{
          position: 'absolute',
          top: isMobile ? '60%' : '45%', // 移动端下文字位置调整
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          textAlign: 'center',
          fontSize: isMobile ? '16px' : '24px', // 手机端较小字体
          width: isMobile ? '80%' : '60%', // 移动端宽度缩小
          backgroundColor: 'rgba(0,0,0,0.4)', // 文字背景透明度
          padding: isMobile ? '10px' : '20px', // 移动端较小的内边距
          borderRadius: '10px',
          zIndex: 10, // z-index保持不变
          whiteSpace: 'pre-wrap', // 保证换行和空白符格式
        }}
      >
        {t('concept')}
      </div>
    </>
  );
};

export default Home;
