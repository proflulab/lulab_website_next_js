"use client";

import { useTranslations } from 'next-intl';
import { useState } from 'react'; // 移除未使用的 useEffect 和 useRef
import { motion } from 'framer-motion';

interface TimelineItemProps {
    year: string;
    content: string;
    description?: string;
    onClick: () => void;
}

// 修改TimelineItem组件，增加更多动画和视觉效果
function TimelineItem({ year, content, onClick }: TimelineItemProps) {
    return (
        <motion.div 
            className="flex flex-col items-center group cursor-pointer"
            onClick={onClick}
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
        </motion.div>
    );
}

export function Timeline() {
    const t = useTranslations('AboutPage.Timeline');
    // 移除 canvasRef
    // const canvasRef = useRef<HTMLCanvasElement>(null); 
    const [selectedMilestone, setSelectedMilestone] = useState<{
        year: string;
        content: string;
        description: string;
    } | null>(null);
    
    // 获取里程碑数据
    const milestones = t.raw('milestones') as Array<{
        year: string;
        content: string;
        description: string;
    }>;
    // 弹窗部分优化为玻璃质感效果
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
                {/* 添加装饰性背景元素 */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full"></div>
                </div>
                
                {/* 调整容器高度 */}
                <div className="relative w-full h-auto min-h-[120px] flex items-center z-10">
                    
                    {/* 添加装饰性线条 */}
                    <div className="absolute top-1/2 left-[100px] right-[100px] h-0.5 bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] transform -translate-y-1/2 rounded-full"></div>
                    
                    {/* TimelineItem 容器 */}
                    <div className="w-full flex justify-between px-[100px]">
                        {milestones.map((milestone, index) => (
                            <TimelineItem
                                key={index}
                                year={milestone.year}
                                content={milestone.content}
                                onClick={() => setSelectedMilestone(milestone)}
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
            
            {/* 详细介绍弹窗 - 保持原有设计 */}
            {selectedMilestone && (
                <motion.div 
                    className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="bg-white rounded-xl max-w-2xl w-full shadow-lg border border-blue-100"
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                    >
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#36D1DC] mb-4">
                                {selectedMilestone.year} - {selectedMilestone.content}
                            </h3>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                                    {selectedMilestone.description}
                                </p>
                            </div>
                        </div>
                        
                        {/* 底部按钮 - 蓝色按钮样式 */}
                        <div className="p-4 flex justify-end">
                            <motion.button 
                                onClick={() => setSelectedMilestone(null)}
                                className="px-4 py-2 bg-[#5B86E5] text-white rounded-lg hover:bg-[#4B76D5] transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('returnButton')}
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}