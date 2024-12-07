import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface WeekContent {
    id: string;
    title: string;
    topics: string[];
    timeline: {
        title: string;
        description: string;
        date: string;
    };
}

const MOCK_DATA: WeekContent[] = [
    {
        id: "week1",
        title: "第一周：人工智能导论",
        topics: [
            "人工智能的历史与发展",
            "机器学习基础概念",
            "深度学习简介",
            "Python编程基础",
            "开发环境搭建",
            "AI伦理与社会影响"
        ],
        timeline: {
            title: "人工智能基础入门",
            description: "了解AI发展历史，掌握基本概念，搭建开发环境",
            date: "第1-2周"
        }
    },
    {
        id: "week2",
        title: "第二周：机器学习基础",
        topics: [
            "监督学习与无监督学习",
            "回归与分类问题",
            "模型评估方法",
            "特征工程",
            "常用算法介绍",
            "实战案例分析"
        ],
        timeline: {
            title: "机器学习实践",
            description: "掌握机器学习基础理论，动手实践基础算法",
            date: "第3-4周"
        }
    },
    {
        id: "week3",
        title: "第三周：深度学习进阶",
        topics: [
            "神经网络原理",
            "卷积神经网络",
            "循环神经网络",
            "迁移学习",
            "模型优化技巧",
            "框架使用实践"
        ],
        timeline: {
            title: "深度学习探索",
            description: "深入学习神经网络，实践深度学习模型",
            date: "第5-6周"
        }
    },
    {
        id: "week4",
        title: "第四周：项目实战",
        topics: [
            "项目架构设计",
            "数据收集与预处理",
            "模型选择与训练",
            "部署与优化",
            "性能评估",
            "项目答辩"
        ],
        timeline: {
            title: "综合项目实践",
            description: "独立完成AI项目，从设计到部署全流程实践",
            date: "第7-8周"
        }
    }
];

interface CurriculumSectionProps {
    curriculumKey?: string;
}

export function CurriculumSection({ curriculumKey = 'aiBasic' }: CurriculumSectionProps) {
    return (
        <section className="py-8 md:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                        大纲
                    </h2>
                    <Progress value={100} className="w-20 md:w-24 mx-auto" />
                </div>

                <div className="grid gap-4 md:gap-8">
                    {MOCK_DATA.map((content, index) => (
                        <Card key={content.id} className={cn(
                            "transition-all duration-300 hover:shadow-lg",
                            "border-l-4",
                            index % 4 === 0 ? "border-l-blue-500" :
                            index % 4 === 1 ? "border-l-green-500" :
                            index % 4 === 2 ? "border-l-purple-500" :
                            "border-l-orange-500"
                        )}>
                            <CardHeader className="p-4 md:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <CardTitle className="text-lg md:text-xl">{content.title}</CardTitle>
                                    <Badge variant="outline" className="w-fit text-xs md:text-sm">{content.timeline.date}</Badge>
                                </div>
                                <CardDescription className="mt-2 text-sm md:text-base">{content.timeline.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                                <div className="space-y-3 md:space-y-4">
                                    <h4 className="font-semibold text-xs md:text-sm text-muted-foreground">本周主题：</h4>
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
                    ))}
                </div>
            </div>
        </section>
    );
}