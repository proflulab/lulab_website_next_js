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

const philosophyItems = [
    { title: "实践优先", content: "强调'学理论不如学案例，学案例不如做案例，做案例不如玩案例'的理念，通过实践活动将知识转化为能力" },
    { title: "项目式学习", content: "采用真实问题导向的学习模式，在解决实际问题中培养创新能力" },
    { title: "早期试错", content: "鼓励在成本较低阶段多尝试、多探索，从失败中学习，找到自己的兴趣和特长" },
    { title: "协作共赢", content: "倡导'聚天下英才和名师一起玩'的理念，通过团队合作促进互相学习与共同进步" },
    { title: "个性化培养", content: "尊重学生独特性，提供量身定制的培养方案，支持非常规成长路径" },
    { title: "终身学习", content: "激发持久学习热情，注重兴趣培养和能力建设，推动教育创新" },
    { title: "全球视野", content: "引入全球顶尖教育资源，培养具备国际视野的创新型人才" },
    { title: "家校协同", content: "强调家长参与教育过程，鼓励家长与孩子共同学习成长" },
    { title: "面向未来", content: "致力于培养具备应对未来挑战能力的创新型人才，推动教育变革" }
];

const cardStyle = "p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-br from-white to-blue-50 border border-transparent hover:border-blue-100";

export function Philosophy() {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-center">办学理念</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {philosophyItems.map((item, index) => (
                    <div key={index} className={cardStyle}>
                        <h3 className="text-xl font-semibold mb-4 text-blue-600">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 