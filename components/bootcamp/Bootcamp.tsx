/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-03 19:50:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-07 04:10:46
 * @FilePath: /lulab_website_next_js/components/training/Training.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { BOOTCAMP_PROJECTS } from "@/lib/db/bootcamp";
import { ChevronRight, } from "lucide-react";
import React from 'react';
import Cube from './Cube';

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

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Hero Section */}
            <section className="h-screen relative" >
                <div className="container mx-auto px-4 relative h-full flex ">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut"
                                }
                            }
                        }}
                        className="max-w-4xl pt-20"
                    >
                        <motion.h1 
                            className="text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9300] to-[#ff0099] leading-tight"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <span className="mr-2">
                                在AI训练营
                            </span>
                            <br />
                            <span className="mr-2">
                                启动你的未来
                            </span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            加入我们尖端训练营，掌握塑造未来的技术。
                            无论你对AI、编程还是元宇宙感兴趣，都能找到你最适合的项目。
                        </motion.p>
                        <motion.div 
                            className="flex items-center gap-4 flex-wrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <a
                                href="/checkout"
                                className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#ff9300] to-[#ff0099] text-white hover:from-[#ff8c00] hover:to-[#ff00b5] transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold text-lg relative z-10"
                            >
                                立即报名
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <button
                                onClick={scrollToProjects}
                                className="group inline-flex items-center px-6 py-3 rounded-full border-2 border-primary/20 bg-background/50 hover:bg-primary/10 hover:border-primary transition-all relative z-10 font-medium"
                            >
                                项目列表
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
                            <a
                                href="/bootcamp/about"
                                className="group inline-flex items-center px-6 py-3 rounded-full border-2 border-primary/20 bg-background/50 hover:bg-primary/10 hover:border-primary transition-all relative z-10 font-medium"
                            >
                                了解更多
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </motion.div>
                    </motion.div>
                    {/* Background Cube Section */}
                    <div className="hidden md:block absolute inset-0 opacity-80 ">
                        <Cube />
                    </div>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {BOOTCAMP_PROJECTS.map((project) => (
                                <ProjectCard key={project.id} {...project} projectId={project.id} />
                            ))}
                        </div>
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
                        <span className="text-sm text-muted-foreground">准备好开启训练营之旅了吗？</span>
                    </div>
                    <a
                        href="/checkout"
                        className="group inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium shadow-lg hover:shadow-xl hover:scale-105 sm:px-4 sm:py-2"
                    >
                        立即报名
                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}