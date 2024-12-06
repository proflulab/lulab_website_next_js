"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./ProjectCard";
import { TRAINING_PROJECTS } from "@/config/training";

export function Training() {
    const t = useTranslations("Training");

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const filterProjectsByCategory = (category: string) => {
        if (category === 'all') return TRAINING_PROJECTS;
        return TRAINING_PROJECTS.filter(project => project.category === category);
    };

    return (
        <div className="min-h-screen bg-background">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="container mx-auto px-4 py-8"
            >
                <h1 className="text-4xl font-bold text-center mb-8">
                    {t("title")}
                </h1>

                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="w-full justify-start mb-8 overflow-x-auto">
                        {["all", "ai", "programming", "metaverse"].map((tab) => (
                            <TabsTrigger key={tab} value={tab}>
                                {t(`tabs.${tab}`)}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {["all", "ai", "programming", "metaverse"].map((category) => (
                        <TabsContent key={category} value={category} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filterProjectsByCategory(category).map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        title={t(`projects.${project.id}.title`)}
                                        description={t(`projects.${project.id}.description`)}
                                        image={project.image}
                                        price={project.price}
                                        duration={t(`projects.${project.id}.duration`)}
                                        level={t(`projects.${project.id}.level`)}
                                        projectId={project.id}
                                        category={t(`categories.${project.category}`)}
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