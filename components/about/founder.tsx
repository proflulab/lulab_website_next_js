/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-03 22:34:55
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-05 18:49:44
 * @FilePath: /lulab_website_next_js/components/about/founder.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

interface AchievementProps {
    title: string;
    content: string;
}

function Achievement({ title, content }: AchievementProps) {
    return (
        <div className="mb-6">
            <h4 className="text-xl font-medium mb-3">{title}</h4>
            <p className="text-gray-600 text-lg">{content}</p>
        </div>
    );
}

interface QualificationProps {
    name: string;
    items: string[];
}

function Qualifications({ name, items }: QualificationProps) {
    return (
        <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <ul className="text-gray-600 text-lg space-y-2">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export function Founder() {
    const t = useTranslations('AboutPage.Founder');

    const achievements = [
        {
            key: 'experience',
            title: t('achievements.experience.title'),
            content: t('achievements.experience.content')
        },
        {
            key: 'teaching',
            title: t('achievements.teaching.title'),
            content: t('achievements.teaching.content')
        },
        {
            key: 'philosophy',
            title: t('achievements.philosophy.title'),
            content: t('achievements.philosophy.content')
        }
    ];

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('title')}</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center w-full">
                <div className="md:w-1/3 relative aspect-[3/4] w-full max-w-md">
                    <Image
                        src="/images/about/founder.jpg"
                        alt={t('name')}
                        fill
                        className="rounded-lg shadow-lg object-cover"
                        priority
                    />
                </div>

                <div className="md:w-2/3">
                    <div className="space-y-6">
                        <Qualifications
                            name={t('name')}
                            items={t.raw('qualifications')}
                        />
                        {achievements.map((achievement) => (
                            <Achievement
                                key={achievement.key}
                                title={achievement.title}
                                content={achievement.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 