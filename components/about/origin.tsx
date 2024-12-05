/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-03 22:38:05
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-04 19:11:39
 * @FilePath: /lulab_website_next_js/components/about/origin.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export function Origin() {
    const t = useTranslations('AboutPage.Origin');

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-12"
                >
                    <h2 className="text-4xl font-bold text-center text-gray-900">
                        {t('title')}
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                                <Image
                                    src="/images/about/lab-origin.png"
                                    alt={t('title')}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:w-1/2"
                        >
                            <div className="space-y-6 text-lg">
                                {t.raw('content').map((paragraph: string, index: number) => (
                                    <p key={index} className="text-gray-700 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 