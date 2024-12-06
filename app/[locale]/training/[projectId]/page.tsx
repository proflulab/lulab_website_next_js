'use client';

import { useTranslations } from "next-intl";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CurriculumSection } from "@/components/training/CurriculumSection";
import { getProjectById } from "@/config/training";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function ProjectDetails() {
    const t = useTranslations("Training");
    const params = useParams();
    const projectId = params.projectId as string;

    const project = getProjectById(projectId);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="relative h-[40vh] w-full">
                <Image
                    src={project.image}
                    alt={t(`projects.${projectId}.title`)}
                    fill
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        {t(`projects.${projectId}.title`)}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-center max-w-2xl px-4"
                    >
                        {t(`projects.${projectId}.description`)}
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">{t("projectDetails.duration")}</h3>
                        <p>{t(`projects.${projectId}.duration`)}</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">{t("projectDetails.level")}</h3>
                        <p>{t(`projects.${projectId}.level`)}</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">{t("projectDetails.price")}</h3>
                        <p>¥{project.price.toLocaleString()}</p>
                    </div>
                </motion.div>

                <ErrorBoundary fallback={<div>课程大纲加载失败</div>}>
                    <Suspense fallback={<LoadingSpinner />}>
                        <CurriculumSection curriculumKey={project.curriculumKey} />
                    </Suspense>
                </ErrorBoundary>

                <div className="text-center mt-12">
                    <Button
                        size="lg"
                        className="px-8"
                        onClick={() => window.location.href = '/training/enroll'}
                    >
                        {t("projectDetails.enrollButton")}
                    </Button>
                </div>
            </div>
        </div>
    );
} 