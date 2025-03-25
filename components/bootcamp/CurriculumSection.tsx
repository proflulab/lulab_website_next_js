/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-06 00:31:11
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-02-06 00:34:16
 * @FilePath: /lulab_website_next_js/components/bootcamp/CurriculumSection.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { memo } from "react";
import { useTranslations, useLocale } from 'next-intl';


const WEEK_COLORS = [
    "border-l-blue-500",
    "border-l-green-500",
    "border-l-purple-500",
    "border-l-orange-500",
] as const;

interface WeekContent {
    id: string;
    title: string;
    topics: string[];
    goals: string[];
    description: string;
    week: string;
}

interface CurriculumSectionProps {
    curriculum: {
        title: string;
        topics: string[];
        goals: string | null;
        description: string;
        week: number;
    }[];
}

const WeekCard = memo(({ content, index, t }: { content: WeekContent; index: number, t: string }) => (
    <Card className={cn(
        "transition-all duration-300 hover:shadow-lg",
        "border-l-4",
        WEEK_COLORS[index % 4]
    )}>
        <CardHeader className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <CardTitle className="text-lg md:text-xl">{content.title}</CardTitle>
                <Badge variant="outline" className="w-fit text-xs md:text-sm">
                    {content.week}
                </Badge>
            </div>
            <CardDescription className="mt-2 text-sm md:text-base">
                {content.description}
            </CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
            <div className="space-y-3 md:space-y-4">
                <h4 className="font-semibold text-xs md:text-sm text-muted-foreground">
                    {t}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {content.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start space-x-2">
                            <span className="text-muted-foreground mt-0.5 md:mt-1">•</span>
                            <span className="text-xs md:text-sm">{topic.trim()}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </CardContent>
    </Card>
));

WeekCard.displayName = "WeekCard";

export function CurriculumSection({ curriculum }: CurriculumSectionProps) {

    const t = useTranslations("BootcampPage.Projectdetails.CurriculumSection");
    const locale = useLocale();

    return (
        <section className="py-8 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                        {t("title")}
                    </h2>
                    <Progress value={100} className="w-20 md:w-24 mx-auto" />
                </div>

                <div className="grid gap-4 md:gap-8">
                    {curriculum.map((content, index) => (
                        <WeekCard
                            key={content.week}
                            content={{
                                id: String(content.week),
                                title: content.title,
                                topics: content.topics,
                                goals: content.goals ? [content.goals] : [],
                                description: content.description,
                                week: `${locale === 'zh' ? `第${content.week}阶段` : 'Phase ' + content.week}`
                            }}
                            index={index}
                            t={t("weeklyTopics")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}