/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-06 00:30:56
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-25 13:31:57
 * @FilePath: /lulab_website_next_js/components/bootcamp/ProjectCard.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Image from "next/image";
import { useRouter } from '@/i18n/routing';
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    duration: string;
    level: string;
    category: string;
    maxStudents: number;
    subtitle: string;
    slug: string;
}

export const ProjectCard = React.memo(function ProjectCard({
    title,
    description,
    image,
    duration,
    level,
    category,
    maxStudents,
    subtitle,
    slug,
}: ProjectCardProps) {

    const router = useRouter();
    const t = useTranslations('BootcampPage.Projects');

    const handleClick = () => {
        router.push(`/bootcamp/${slug}`);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="h-[500px]"
        >
            <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        priority={false}
                    />
                    <div className="absolute top-0 right-0 bg-primary text-white px-2 py-1 text-sm font-semibold rounded-bl-lg">
                        {category}
                    </div>
                </div>
                <CardHeader className="flex-shrink-0">
                    <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
                    <p className="text-muted-foreground line-clamp-1">{subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{duration}</span>
                        <span className="text-sm font-semibold text-primary">{level}</span>
                    </div>
                    <p className="text-sm text-card-foreground line-clamp-3">{description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center flex-shrink-0">
                    <span className="text-sm text-muted-foreground">{t("maxStudents")}: {maxStudents}</span>
                    <Button onClick={handleClick} variant="default">
                        {t("Learnmore")}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
});