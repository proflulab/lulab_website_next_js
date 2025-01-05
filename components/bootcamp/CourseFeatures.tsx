/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-03 19:50:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-06 00:31:25
 * @FilePath: /lulab_website_next_js/components/training/CourseFeatures.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
    ClockIcon,
    PersonIcon,
    BarChartIcon
} from "@radix-ui/react-icons";

interface CourseFeaturesProps {
    duration: string;
    level: string;
    maxStudents?: number;
}

export function CourseFeatures({ duration, level, maxStudents }: CourseFeaturesProps) {
    const features = [
        {
            icon: <ClockIcon className="w-6 h-6" />,
            label: "Duration",
            value: duration
        },
        {
            icon: <BarChartIcon className="w-6 h-6" />,
            label: "Level",
            value: level
        },
        {
            icon: <PersonIcon className="w-6 h-6" />,
            label: "Class Size",
            value: maxStudents ? `Max ${maxStudents} students` : "Flexible"
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {features.map((feature, index) => (
                <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className="p-4 flex flex-col items-center text-center">
                        <div className="mb-2 text-primary">
                            {feature.icon}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {feature.label}
                        </div>
                        <div className="font-semibold mt-1">
                            {feature.value}
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}