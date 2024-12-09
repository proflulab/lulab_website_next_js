/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-03 18:34:23
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-05 19:09:24
 * @FilePath: /lulab_website_next_js/app/[locale]/about/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from "@/components/about/carousel";
import { Founder } from "@/components/about/founder";
import { Mission } from "@/components/about/mission";
import { Philosophy } from "@/components/about/philosophy";
import { Origin } from "@/components/about/origin";
import { Timeline } from "@/components/about/timeline";

export default function About() {
  return (
    <main className="flex flex-col w-full scroll-smooth">
      <section className="w-full h-[30vh] md:h-[calc(100vh-64px)]">
        <Carousel />
      </section>

      <section className="w-full min-h-[calc(100vh-64px)] bg-white flex items-center py-20">
        <div className="container mx-auto px-4">
          <Mission />
        </div>
      </section>

      <section className="w-full min-h-[calc(100vh-64px)] bg-slate-50 flex items-center py-20">
        <div className="container mx-auto px-4">
          <Founder />
        </div>
      </section>

      <section className="w-full min-h-[calc(100vh-64px)] bg-white flex items-center py-20">
        <div className="container mx-auto px-4">
          <Philosophy />
        </div>
      </section>

      <section className="w-full min-h-[calc(100vh-64px)] bg-slate-50 flex items-center py-20">
        <div className="container mx-auto px-4">
          <Origin />
        </div>
      </section>

      <section className="w-full min-h-[calc(100vh-64px)] bg-white flex items-center py-20">
        <div className="container mx-auto px-4">
          <Timeline />
        </div>
      </section>

    </main>
  );
}
