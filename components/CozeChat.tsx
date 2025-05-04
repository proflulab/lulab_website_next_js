/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-05-03 10:18:36
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-05-04 12:10:38
 * @FilePath: /lulab_website_next_js/components/CozeChat.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        CozeWebSDK: {
            WebChatClient: new (config: {
                config: {
                    bot_id: string;
                };
                componentProps: {
                    title: string;
                };
                auth: {
                    type: string;
                    token: string;
                    onRefreshToken: () => string;
                };
            }) => void;
        };
    }
}

export default function CozeChat() {
    useEffect(() => {
        // 动态加载Coze SDK脚本
        const loadCozeSDK = () => {
            const script = document.createElement('script');
            script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/cn/index.js';
            script.async = true;
            script.onload = initCozeChat;
            document.body.appendChild(script);
        };

        // 添加限制高度的CSS样式
        const addChatStyles = () => {
            const styleElement = document.createElement('style');
            styleElement.id = 'coze-chat-styles';
            styleElement.textContent = `
                /* 限制Coze聊天窗口高度 */
                div[style*="display: block; width: 460px"] {
                    max-height: 80vh !important; /* 限制高度为视口高度的80% */
                }
                iframe[class*="b47a01a7e24cbec6131b"] {
                    max-height: 80vh !important; /* 限制iframe高度 */
                }
                /* 针对PC端的样式 */
                @media (min-width: 768px) {
                    div[style*="display: block; width: 460px"] {
                        max-height: 600px !important; /* PC端固定高度 */
                    }
                    iframe[class*="b47a01a7e24cbec6131b"] {
                        max-height: 600px !important; /* PC端固定iframe高度 */
                    }
                    /* 调整聊天窗口的位置 */
                    div[style*="display: block; width: 460px"] {
                        bottom: 20px !important;
                        right: 20px !important;
                    }
                }
            `;
            document.head.appendChild(styleElement);
        };

        // 初始化Coze客服
        const initCozeChat = () => {
            if (window.CozeWebSDK) {
                // 先添加样式
                addChatStyles();

                // 从环境变量获取配置信息
                const botId = process.env.COZE_BOT_ID || '';
                const token = process.env.COZE_TOKEN || '';

                // 然后初始化聊天客户端
                new window.CozeWebSDK.WebChatClient({
                    config: {
                        bot_id: botId,
                    },
                    componentProps: {
                        title: 'Coze',
                    },
                    auth: {
                        type: 'token',
                        token: token,
                        onRefreshToken: function () {
                            return token;
                        }
                    }
                });
            }
        };

        loadCozeSDK();

        // 清理函数
        return () => {
            // 移除SDK脚本
            const scriptElement = document.querySelector('script[src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/cn/index.js"]');
            if (scriptElement) {
                scriptElement.remove();
            }

            // 移除添加的样式
            const styleElement = document.getElementById('coze-chat-styles');
            if (styleElement) {
                styleElement.remove();
            }
        };
    }, []);

    // 这个组件不需要渲染任何内容，因为Coze客服会自动添加到页面中
    return null;
}