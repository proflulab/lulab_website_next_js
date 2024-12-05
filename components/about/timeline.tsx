/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-04 16:24:46
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-04 19:28:14
 * @FilePath: /lulab_website_next_js/components/about/timeline.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
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
    const milestones = [
        {
            year: "1994年",
            content: "陆向谦教授前瞻性地预见互联网将颠覆世界，开始关注创新教育模式。"
        },
        {
            year: "2007年",
            content: "在清华大学经济管理学院开设创新创业课程，旨在培养学生的实践能力和创新思维。"
        },
        {
            year: "2014年4月",
            content: "为扩大受众群体，将课程从清华课堂延伸到线上，开启实验室的互联网教育探索。"
        },
        {
            year: "2020年秋季",
            content: "实验室与复旦大学联合授课，推动创新创业教育的跨校协作。"
        },
        {
            year: "至今",
            content: "实验室逐步形成系统化的项目式学习模式，与国内外顶尖创业者和企业家合作，培养了大批具备全球视野和创新实践能力的复合型人才，实现网上斯坦福大学的愿景。"
        }
    ];

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">发展历程</h2>
            <div className="w-full max-w-3xl">
                {milestones.map((milestone, index) => (
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