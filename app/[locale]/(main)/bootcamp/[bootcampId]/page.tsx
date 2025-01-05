'use client';

import { useParams, notFound } from "next/navigation";
import { useRouter } from '@/i18n/routing';
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CurriculumSection } from "@/components/bootcamp/CurriculumSection";
import { CourseFeatures } from "@/components/bootcamp/CourseFeatures";
import { getProjectById } from "@/data/bootcamp";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function ProjectDetails() {
    const params = useParams();
    const projectId = params.projectId as string;
    const router = useRouter();

    const project = getProjectById(projectId);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="relative h-[50vh] w-full overflow-hidden group">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-[0.4] transform scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
                    priority
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 bg-gradient-to-b from-black/30 via-black/50 to-black/70">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center shadow-text bg-clip-text">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-center max-w-3xl px-4 leading-relaxed shadow-text text-gray-200">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                >
                    <CourseFeatures
                        duration={project.duration}
                        level={project.level}
                        maxStudents={project.maxStudents}
                    />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="md:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="prose dark:prose-invert max-w-none"
                        >
                            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">项目描述</h2>
                                    <div className="mb-12 text-lg leading-relaxed">
                                        {project.description}
                                    </div>

                                    <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">项目要求</h2>
                                    <ul className="list-none space-y-4 mb-12">
                                        {project.prerequisites?.map((prereq, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * index }}
                                                className="flex items-start hover:translate-x-2 transition-transform duration-300"
                                            >
                                                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                                                <span className="text-lg">{prereq}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <h2 className="text-3xl font-bold mb-8 text-primary border-b pb-4">项目目标</h2>
                                    <ul className="list-none space-y-4 mb-12">
                                        {project.outcomes?.map((outcome, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * index }}
                                                className="flex items-start hover:translate-x-2 transition-transform duration-300"
                                            >
                                                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                                                <span className="text-lg">{outcome}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>

                        <ErrorBoundary fallback={<div className="p-4 bg-destructive/10 rounded-lg">Something went wrong</div>}>
                            <Suspense fallback={<div className="flex justify-center p-8"><LoadingSpinner /></div>}>
                                <CurriculumSection curriculumKey={projectId} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>

                    <div className="hidden md:block md:col-span-1">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="sticky top-24"
                        >
                            <Card className="p-8 shadow-xl border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                <h3 className="text-2xl font-bold mb-8 text-primary">立即报名</h3>
                                <div className="space-y-6">
                                    <Button 
                                        className="w-full text-lg font-semibold" 
                                        size="lg"
                                        onClick={() => {
                                            router.push('/checkout');
                                        }}
                                    >
                                        立即报名
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile Fixed Purchase Button */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t z-50 shadow-lg">
                <motion.div 
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="container mx-auto p-4"
                >
                    <div className="flex items-center justify-between gap-4">
                        <Button 
                            size="lg"
                            className="text-lg font-semibold px-8"
                            onClick={() => {
                                router.push('/checkout');
                            }}
                        >
                            立即报名
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 