"use client";

import { useTranslations } from 'next-intl';

interface TimelineItemProps {
    year: string;
    content: string;
}

function TimelineItem({ year, content }: TimelineItemProps) {
    return (
        <div className="flex gap-6 mb-12 group">
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform transition-transform duration-300 group-hover:scale-125"></div>
                <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
                <h4 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{year}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{content}</p>
            </div>
        </div>
    );
}

export function Timeline() {
    const t = useTranslations('AboutPage.Timeline');

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('title')}</h2>
            <div className="w-full max-w-3xl">
                {t.raw('milestones').map((milestone: { year: string; content: string }, index: number) => (
                    <TimelineItem
                        key={index}
                        year={milestone.year}
                        content={milestone.content}
                    />
                ))}
            </div>
        </div>
    );
} 