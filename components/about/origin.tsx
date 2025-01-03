/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-03 22:38:05
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-05 19:18:57
 * @FilePath: /lulab_website_next_js/components/about/origin.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Origin() {
    const t = useTranslations('AboutPage.Origin');

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-12">
                    <h2 className="text-4xl font-bold text-center text-gray-900">
                        {t('title')}
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/about/lab-origin.png"
                                    alt={t('title')}
                                    width={1000}
                                    height={800}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="space-y-6 text-lg">
                                {t.raw('content').map((paragraph: string, index: number) => (
                                    <p key={index} className="text-gray-700 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 