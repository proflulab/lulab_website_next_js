/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-03 19:50:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-06 01:24:49
 * @FilePath: /lulab_website_next_js/components/training/Training.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./ProjectCard";
import { BOOTCAMP_PROJECTS } from "@/data/bootcamp";
import { ChevronRight, GraduationCap, Users, Target } from "lucide-react";
import React from 'react';

export function Bootcamp() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const projectsSectionRef = React.useRef<HTMLDivElement>(null);
    const [showFixedNav, setShowFixedNav] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowFixedNav(scrollPosition > 400); // 当滚动超过400px时显示
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToProjects = () => {
        projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const filterProjectsByCategory = (category: string) => {
        if (category === 'all') return BOOTCAMP_PROJECTS;
        return BOOTCAMP_PROJECTS.filter(project => project.category === category);
    };

    const categoryLabels = {
        ai: "人工智能",
        programming: "编程开发",
        metaverse: "元宇宙"
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-24">
                <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 leading-tight">
                            在陆向谦实验室
                            <br />
                            开启你的未来
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                            加入我们的尖端训练营，掌握塑造未来的技术。
                            无论你对AI、编程还是元宇宙感兴趣，我们都能为你提供最适合的项目。
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                            <a
                                href="/checkout"
                                className="group inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold text-lg"
                            >
                                立即报名
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <button
                                onClick={scrollToProjects}
                                className="group inline-flex items-center px-6 py-3 rounded-full border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground transition-all"
                            >
                                浏览项目
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <a
                                href="/bootcamp/about"
                                className="group inline-flex items-center px-6 py-3 rounded-full border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground transition-all"
                            >
                                了解更多
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <GraduationCap className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">专家指导</h3>
                            <p className="text-muted-foreground">由行业专家和资深导师提供专业指导，带来真实的行业经验</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">协作学习</h3>
                            <p className="text-muted-foreground">参与团队项目，与志同道合的创新者建立人脉网络</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">职业导向</h3>
                            <p className="text-muted-foreground">获取最主急需的实用技能和实战经验</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section ref={projectsSectionRef} className="py-20 bg-background" id="projects">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">训练营项目</h2>
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList className="mb-8">
                                <TabsTrigger value="all">全部项目</TabsTrigger>
                                <TabsTrigger value="ai">AI 项目</TabsTrigger>
                                <TabsTrigger value="programming">编程开发</TabsTrigger>
                                <TabsTrigger value="metaverse">元宇宙</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {BOOTCAMP_PROJECTS.map((project) => (
                                    <ProjectCard key={project.id} {...project} projectId={project.id} />
                                ))}
                            </TabsContent>
                            {Object.keys(categoryLabels).map((category) => (
                                <TabsContent
                                    key={category}
                                    value={category}
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                >
                                    {filterProjectsByCategory(category).map((project) => (
                                        <ProjectCard key={project.id} {...project} projectId={project.id} />
                                    ))}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </motion.div>
                </div>
            </section>

            {/* Fixed Bottom Navigation Bar */}
            <motion.div
                className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t z-50 shadow-[0_-1px_3px_rgba(0,0,0,0.1)]"
                initial={{ y: 100 }}
                animate={{ y: showFixedNav ? 0 : 100 }}
                transition={{ duration: 0.3 }}
            >
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">准备好开启你的训练营之旅了吗？</span>
                        <span className="font-medium">加入陆向谦实验室训练营</span>
                    </div>
                    <a
                        href="/signup"
                        className="group inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        立即报名
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}