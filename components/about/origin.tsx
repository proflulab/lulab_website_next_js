/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-12-03 22:38:05
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-04 19:11:39
 * @FilePath: /lulab_website_next_js/components/about/origin.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Origin() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-12"
                >
                    <h2 className="text-4xl font-bold text-center text-gray-900">
                        源起
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                                <Image
                                    src="/images/about/lab-origin.png"
                                    alt="Lab Origin"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:w-1/2"
                        >
                            <div className="space-y-6 text-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    陆向谦实验室的创立源于陆教授对自己两个孩子教育的深切思考。在香港科技大学教授数理金融期间，他见证了互联网浪潮的兴起，预见了技术革命带来的机遇，随即开始创业并实现财务自由。
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    在硅谷的经历让他发现，即便是顶尖大学的毕业生也面临就业挑战，而那些早期接触计算机、擅长与计算机对话的人却备受青睐。这促使他投入五年时间研究教育方法，并成功地将其运用在自己的孩子身上。
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    怀着回馈清华大学的初心，陆教授希望帮助更多学生克服计算机基础能力和英语学习的困难。他创新性地设计了一种家庭友好的学习模式，通过互联网将优质教育内容直接送达学习者，让家长能够有效地参与和陪伴。
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    借鉴斯坦福大学的教育理念，实验室致力于通过线上平台普及先进教育方法，实现王谢堂前燕，飞入寻常百姓家的愿景。面对传统教育与现代社会需求的错配，实验室通过创新的教育模式，培养适应新经济发展的未来人才。
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 