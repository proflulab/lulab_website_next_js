"use client";

import Image from "next/image";

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
    items: string[];
}

function Qualifications({ items }: QualificationProps) {
    return (
        <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">陆向谦教授</h3>
            <ul className="text-gray-600 text-lg space-y-2">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export function Founder() {
    const qualifications = [
        "清华经管学院创新创业课程教授",
        "教育部全国高教教师网络培训中心创新/创业特聘教授",
        "美国加州伯克利大学Haas商学院博士",
        "美国西北大学Kellogg商学院工商管理硕士",
        "清华大学工学硕士"
    ];

    const achievements = [
        {
            title: "丰富的实践经验",
            content: "曾策划摩托罗拉进入中国战略、任教于香港科技大学管理学院、担任投资基金负责人，同时也是一位成功的创业家。"
        },
        {
            title: "教学成就",
            content: "陆向谦实验室的学员创立了多家独角兽公司。陆教授更鼓励学员们加入正在爆发的创业公司进一步修身，目标在30岁前达到财务自由。他亲自为优秀学员推荐机会，对接实验室嘉宾创始人与CEO。"
        },
        {
            title: "身体力行的教育理念",
            content: "陆教授的两个孩子从中学起就加入了陆向谦实验室。女儿毕业于斯坦福大学，曾是Pinterest和Airtable的早期员工；儿子就读于加州伯克利大学，19岁便全职加入Uber，在不影响学业的同时，现已成为Flexport的早期员工。"
        }
    ];

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">创始人介绍</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center w-full">
                <div className="md:w-1/3 relative aspect-[3/4] w-full max-w-md">
                    <Image
                        src="/images/about/founder.jpg"
                        alt="陆向谦教授"
                        fill
                        className="rounded-lg shadow-lg object-cover"
                        priority
                    />
                </div>

                <div className="md:w-2/3">
                    <div className="space-y-6">
                        <Qualifications items={qualifications} />
                        {achievements.map((achievement, index) => (
                            <Achievement
                                key={index}
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