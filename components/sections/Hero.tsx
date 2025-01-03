/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-28 18:46:39
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-29 04:41:26
 * @FilePath: /lulab_website_next_js/components/sections/Hero.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
// import { GraduationCap, Globe } from "lucide-react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from '@/i18n/routing';

const BackgroundImage = () => (
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/leadership.jpg"
      alt="Education Background"
      fill
      className="object-cover brightness-75 transform scale-105 animate-ken-burns"
      priority
      quality={90}
    />
    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
  </div>
);

const HeroContent = () => {

  const t = useTranslations('HomePage.Hero');
  const router = useRouter();
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.h1
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
      >
        {t('title')}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {t('titleHighlight')}
        </span>
        <span className="block text-2xl md:text-3xl mt-4 text-gray-200">
          {t('tagline')}
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto"
      >
        {t('subtitle')}
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        {/* <Button 
          size="lg" 
          className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform"
        >
          <GraduationCap className="w-5 h-5" />
          {t('enrollButton')}
        </Button> */}
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform bg-white/10 backdrop-blur-sm"
          onClick={() => router.push('/about')}
        >
          <Globe className="w-5 h-5" />
          {t('learnMoreButton')}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export function Hero() {

  return (
    <section className="relative h-[93vh] flex items-center justify-center overflow-hidden bg-black">
      <BackgroundImage />
      <HeroContent />
    </section>
  );
}