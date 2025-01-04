"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Target, Clock, Award } from "lucide-react";

export default function TrainingAboutPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const methodologies = [
        {
            icon: <BookOpen className="h-6 w-6" />,
            title: "理论与实践结合",
            description: "通过课堂学习和实战项目相结合的方式，帮助学员深入理解和运用所学知识"
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "小组协作学习",
            description: "培养团队协作能力，通过小组项目提升沟通和项目管理能力"
        },
        {
            icon: <Target className="h-6 w-6" />,
            title: "目标导向教学",
            description: "根据学员的学习目标和职业发展需求，制定个性化的学习计划"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "灵活的学习时间",
            description: "提供灵活的课程安排，帮助学员平衡学习与其他责任"
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: "项目实战经验",
            description: "通过真实项目实践，积累实际工作经验，建立个人作品集"
        }
    ];

    const faqs = [
        {
            question: "训练营的课程周期是多久？",
            answer: "我们提供不同周期的课程，基础训练营为4周，进阶训练营为12周。每个课程都经过精心设计，确保学员能够在规定时间内掌握相关技能。"
        },
        {
            question: "是否需要相关背景才能参加？",
            answer: "这取决于您选择的课程级别。基础课程不要求特定背景，我们会从基础开始教学；进阶课程可能需要一些相关基础知识。建议查看具体课程的先修要求。"
        },
        {
            question: "课程形式是怎样的？",
            answer: "课程采用线上线下结合的混合式教学模式，包括：理论课程、实践工作坊、小组项目、导师辅导等多种形式。我们注重实践，确保学员能够真正掌握和应用所学知识。"
        },
        {
            question: "如何评估学习效果？",
            answer: "我们通过多维度评估体系衡量学习效果，包括：课程作业、项目成果、技能测评、团队协作表现等。每个学员都会得到详细的学习进度报告和改进建议。"
        },
        {
            question: "是否提供就业支持？",
            answer: "是的，我们提供全方位的就业支持，包括：职业规划指导、简历优化、面试技巧培训、企业对接机会等。我们的目标是帮助每位学员实现职业发展目标。"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl font-bold mb-6">
                            陆向谦实验室训练营
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            打造未来科技领袖，培养创新型人才
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">训练营特色</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {methodologies.map((method, index) => (
                                <Card key={index} className="bg-card">
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                                {method.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                                            <p className="text-muted-foreground">{method.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Course Structure Section */}
            <div className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">课程体系</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-4">基础训练营</h3>
                                    <ul className="space-y-2">
                                        <li>• 课程周期：4周</li>
                                        <li>• 适合人群：零基础或初学者</li>
                                        <li>• 课程内容：基础理论 + 入门实践</li>
                                        <li>• 学习目标：掌握领域基础知识和技能</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-4">进阶训练营</h3>
                                    <ul className="space-y-2">
                                        <li>• 课程周期：12周</li>
                                        <li>• 适合人群：有基础知识的学习者</li>
                                        <li>• 课程内容：深入理论 + 项目实战</li>
                                        <li>• 学习目标：独立完成复杂项目的能力</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">常见问题</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
