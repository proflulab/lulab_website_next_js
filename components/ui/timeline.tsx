"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineProps {
    items: {
        title: string;
        description: string;
        date?: string;
    }[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="space-y-8">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-border"
                >
                    <div
                        className={cn(
                            "absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full border-2",
                            "border-primary bg-background"
                        )}
                    />
                    <div className="space-y-2">
                        {item.date && (
                            <time className="text-sm text-muted-foreground">{item.date}</time>
                        )}
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
} 