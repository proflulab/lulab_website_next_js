/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-12-03 22:37:59
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-04 19:30:57
 * @FilePath: /lulab_website_next_js/components/about/philosophy.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
"use client";

import { useTranslations } from 'next-intl';

export function Philosophy() {
    const t = useTranslations('AboutPage.Philosophy');

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-center">{t('title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.raw('items').map((item: { title: string; content: string }, index: number) => (
                    <div key={index} className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-br from-white to-blue-50 border border-transparent hover:border-blue-100">
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 