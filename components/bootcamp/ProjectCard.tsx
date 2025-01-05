/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-06 00:30:56
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-06 01:11:22
 * @FilePath: /lulab_website_next_js/components/bootcamp/ProjectCard.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from '@/i18n/routing';
import { motion } from "framer-motion";
import { ClockIcon, ReaderIcon } from "@radix-ui/react-icons";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    duration: string;
    level: string;
    projectId: string;
    category: string;
}

export const ProjectCard = React.memo(function ProjectCard({
    title,
    description,
    image,
    duration,
    level,
    projectId,
    category,
}: ProjectCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/bootcamp/${projectId}`);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                    <div className="relative h-40 sm:h-48 w-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover rounded-t-lg"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            priority={false}
                        />
                        <div className="absolute top-2 right-2 px-2 py-1 bg-primary/80 text-white rounded text-sm">
                            {category}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm sm:text-base">{description}</p>
                    <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            {duration}
                        </span>
                        <span className="flex items-center gap-1">
                            <ReaderIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                            {level}
                        </span>
                    </div>
                </CardContent>
                <CardFooter className="p-4 sm:p-6 pt-0">
                    <div className="w-full flex justify-between items-center">
                        <Button onClick={handleClick} size="sm" className="w-full sm:w-auto">了解更多</Button>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
}); 