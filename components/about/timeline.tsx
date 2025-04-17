"use client";

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // 移除未使用的 AnimatePresence 和 X

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
    const canvasRef = useRef<HTMLCanvasElement>(null);
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
    
    // 绘制时间线 - 合并两个useEffect为一个
    useEffect(() => {
        if (!canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        // 设置画布尺寸
        const setCanvasSize = () => {
            const container = canvas.parentElement;
            if (container) {
                canvas.width = container.clientWidth;
                canvas.height = 60; // 调整高度适合波浪线
            }
        };
        
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
        
        // 绘制波浪线时间线
        const drawTimeline = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            if (milestones.length <= 1) return;
            
            const startX = 100;
            const endX = canvas.width - 100;
            const centerY = canvas.height / 2;
            const segmentWidth = (endX - startX) / (milestones.length - 1);
            
            // 创建渐变
            const gradient = ctx.createLinearGradient(startX, centerY, endX, centerY);
            gradient.addColorStop(0, '#36D1DC'); // 浅蓝色
            gradient.addColorStop(1, '#5B86E5'); // 深蓝色
            
            // 设置线条样式
            ctx.strokeStyle = '#36D1DC';
            ctx.lineWidth = 6;
            ctx.lineCap = 'round';
            
            // 绘制主线 - 波浪线
            ctx.beginPath();
            ctx.moveTo(startX, centerY);
            
            // 使用贝塞尔曲线创建波浪效果
            for (let i = 0; i < milestones.length - 1; i++) {
                const x1 = startX + i * segmentWidth;
                const x2 = startX + (i + 1) * segmentWidth;
                const xMid = (x1 + x2) / 2;
                
                // 轻微的波浪效果
                const amplitude = 10; // 波浪幅度
                const y1 = i % 2 === 0 ? centerY - amplitude : centerY + amplitude;
                
                ctx.quadraticCurveTo(xMid, y1, x2, centerY);
            }
            
            ctx.stroke();
            
            // 在每个时间点位置添加圆形端点
            for (let i = 0; i < milestones.length; i++) {
                const x = startX + i * segmentWidth;
                
                // 外圆
                ctx.beginPath();
                ctx.arc(x, centerY, 12, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.strokeStyle = '#36D1DC';
                ctx.lineWidth = 4;
                ctx.fill();
                ctx.stroke();
                
                // 内圆
                ctx.beginPath();
                ctx.arc(x, centerY, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#36D1DC';
                ctx.fill();
            }
        };
        
        drawTimeline();
        
        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [milestones]);

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
            
            {/* 优化时间线容器 */}
            <motion.div 
                className="w-full rounded-2xl p-8 bg-[#e6f7fb] shadow-lg relative overflow-hidden"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* 背景装饰 */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <svg className="absolute top-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#36D1DC" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#5B86E5" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                
                <div className="relative w-full h-[180px]">
                    <canvas ref={canvasRef} className="absolute top-1/2 left-0 w-full h-[60px] -translate-y-1/2" />
                    
                    <div className="absolute top-1/2 left-0 w-full flex justify-between px-[100px] -translate-y-1/2">
                        {milestones.map((milestone, index) => (
                            <TimelineItem
                                key={index}
                                year={milestone.year}
                                content={milestone.content}
                                onClick={() => setSelectedMilestone(milestone)}
                            />
                        ))}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                        <div className="text-center">
                            <motion.span 
                                className="text-sm text-gray-500 italic px-3 py-1.5 bg-white/70 rounded-full shadow-sm"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                {t('clickToView')}
                            </motion.span>
                        </div>
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
            
            {/* 详细介绍弹窗 */}
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
                        
                        {/* 底部按钮 */}
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