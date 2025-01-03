/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-03 19:50:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-03 23:17:22
 * @FilePath: /lulab_website_next_js/components/training/Training.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./ProjectCard";
import { TRAINING_PROJECTS } from "@/config/training";

export function Training() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const filterProjectsByCategory = (category: string) => {
        if (category === 'all') return TRAINING_PROJECTS;
        return TRAINING_PROJECTS.filter(project => project.category === category);
    };

    const tabLabels = {
        all: "All Projects",
        ai: "AI Projects",
        programming: "Programming",
        metaverse: "Metaverse"
    };

    const categoryLabels = {
        ai: "Artificial Intelligence",
        programming: "Programming",
        metaverse: "Metaverse"
    };

    return (
        <div className="min-h-screen bg-background">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="container mx-auto px-4 py-8"
            >


                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="w-full justify-start mb-8 overflow-x-auto">
                        {["all", "ai", "programming", "metaverse"].map((tab) => (
                            <TabsTrigger key={tab} value={tab}>
                                {tabLabels[tab as keyof typeof tabLabels]}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {["all", "ai", "programming", "metaverse"].map((category) => (
                        <TabsContent key={category} value={category} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filterProjectsByCategory(category).map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        title={project.title}
                                        description={project.description}
                                        image={project.image}
                                        duration={project.duration}
                                        level={project.level}
                                        projectId={project.id}
                                        category={categoryLabels[project.category as keyof typeof categoryLabels]}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </motion.div>
        </div>
    );
}