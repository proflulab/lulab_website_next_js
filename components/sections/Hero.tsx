/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-28 18:46:39
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-30 09:59:05
 * @FilePath: /lulab_website_next_js/components/sections/Hero.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('HomePage.Hero');
  
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/leadership.jpg"
          alt="Education Background"
          fill
          className="object-cover brightness-50 transform scale-105 animate-ken-burns"
          priority
        />
      </div>

      {/* 中心内容 */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {t('title')}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {t('titleHighlight')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
}