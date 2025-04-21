"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react'; // 移除未使用的 useEffect 和 useRef
import { motion } from 'framer-motion';

interface TimelineItemProps {
    year: string;
    content: string;
    description?: string;
}

// 修改TimelineItem组件，移除点击事件
function TimelineItem({ year, content }: TimelineItemProps) {
    return (
        <motion.div 
            className="flex flex-col items-center group cursor-pointer relative"
            whileHover={{ y: -5 }} 
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="w-8 h-8 bg-white rounded-full border-4 border-[#36D1DC] flex items-center justify-center transform transition-all duration-300 group-hover:scale-125 shadow-lg hover:shadow-xl">
                <motion.div 
                    className="w-3 h-3 bg-[#36D1DC] rounded-full"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />
            </div>
            <div className="mt-3 text-center">
                <h4 className="text-lg font-semibold text-[#36D1DC]">{year}</h4>
                <p className="text-gray-600 text-sm max-w-[140px] truncate mt-1">{content}</p>
            </div>
            
            {/* 添加悬停时显示的详细信息卡片 */}
            <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white p-3 rounded-lg shadow-lg border border-blue-100 w-64 transform -translate-x-1/2 left-1/2 relative">
                    <div className="text-sm text-gray-700">{content}</div>
                    <div className="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-blue-100 rotate-45"></div>
                </div>
            </div>
        </motion.div>
    );
}

export function Timeline() {
    const t = useTranslations('AboutPage.Timeline');
    
    // 获取里程碑数据
    const milestones = t.raw('milestones') as Array<{
        year: string;
        content: string;
        description: string;
    }>;

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 py-20">
            {/* 优化标题样式 */}
            <motion.h2 
                className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {t('title')}
            </motion.h2>
            
            {/* 添加副标题 */}
            <motion.p
                className="text-lg text-gray-600 mb-12 text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {t('fazhan')}
            </motion.p>
            
            {/* 优化时间线容器 - 设置为更美观的背景 */}
            <motion.div 
                className="w-full rounded-2xl p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-lg relative border border-blue-100" 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* 优化装饰性背景元素 */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-200 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-teal-200 rounded-full"></div>
                </div>
                
                {/* 调整容器高度 */}
                <div className="relative w-full h-auto min-h-[120px] flex items-center z-10">
                    {/* 添加连接时间点的曲线 */}
                    <div className="absolute top-4 left-[100px] right-[100px] h-0.5">
                        <svg className="w-full h-8" viewBox="0 0 1000 50" preserveAspectRatio="none">
                            <path 
                                d="M0,25 C200,50 300,0 500,25 C700,50 800,0 1000,25" 
                                stroke="url(#gradient)" 
                                strokeWidth="3" 
                                fill="none" 
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#36D1DC" />
                                    <stop offset="100%" stopColor="#5B86E5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    
                    {/* TimelineItem 容器 */}
                    <div className="w-full flex justify-between px-[100px]">
                        {milestones.map((milestone, index) => (
                            <TimelineItem
                                key={index}
                                year={milestone.year}
                                content={milestone.content}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
            
            {/* 添加统计数字部分 */}
            <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="text-4xl font-bold text-[#36D1DC] mb-2">{milestones.length}</div>
                    <div className="text-gray-600">{t('milestoneCount')}</div>
                </motion.div>
                
                <motion.div 
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="text-4xl font-bold text-[#5B86E5] mb-2">{new Date().getFullYear() - parseInt(milestones[0]?.year || "0")}</div>
                    <div className="text-gray-600">{t('yearsDevelopment')}</div>
                </motion.div>
                
                <motion.div 
                    className="bg-white p-6 rounded-xl shadow-md text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent mb-2">∞</div>
                    <div className="text-gray-600">{t('infinitePossibilities')}</div>
                </motion.div>
            </div>
            
            {/* 添加简短介绍文字 */}
            <motion.div 
                className="mt-16 max-w-3xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <p className="text-gray-600 leading-relaxed">
                    {t('introduction')}
                </p>
            </motion.div>
        </div>
    );
}