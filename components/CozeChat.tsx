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
import { useTranslations } from 'next-intl';

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
                ui: {
                    base: {
                        icon: string;
                        layout: string;
                        zIndex: number;
                    },
                    footer: {
                        isShow: boolean;
                    },
                    header: {
                        icon: string;
                    },
                    chatBot: {
                        title: string;
                    },
                    userInfo: {
                        id: '12345',
                        url: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
                        nickname: 'UserA',
                      },
                  }
            }) => void;
        };
    }
}

export default function CozeChat() {
    const t = useTranslations('CozeChat');

    useEffect(() => {
        console.log('[CozeChat] useEffect triggered. Current locale/translation key for cozeid:', t('cozeid'));

        // 尝试找到并移除 Coze SDK 可能创建的聊天窗口 DOM 元素
        // 注意：这些选择器是基于您之前的CSS和通用模式，可能需要根据 Coze SDK 实际生成的 HTML 结构进行调整
        const removeExistingChatWidget = () => {
            console.log('[CozeChat] Attempting to remove existing chat widget UI...');
            // Coze SDK 通常会将其 UI 附加到 body 或特定的容器中
            // 查找可能的 Coze 根元素或 iframe
            const cozeIframes = document.querySelectorAll('iframe[src*="coze.cn"], iframe[id*="coze"], iframe[class*="coze"]');
            cozeIframes.forEach(iframe => {
                console.log('[CozeChat] Removing Coze iframe:', iframe);
                iframe.parentElement?.remove(); // 尝试移除 iframe 的父容器，或者 iframe 本身
                iframe.remove();
            });

            // 查找可能的 Coze 容器 div
            // 您之前的 CSS 针对 `div[style*="display: block; width: 460px"]`
            const cozeDivs = document.querySelectorAll('div[style*="display: block; width: 460px"]');
            cozeDivs.forEach(div => {
                console.log('[CozeChat] Removing Coze div:', div);
                div.remove();
            });
            
            // 如果 Coze SDK 有一个已知的顶级 wrapper ID 或 class，也应该在这里移除
            // 例如：const cozeWrapper = document.getElementById('coze-chat-wrapper'); if (cozeWrapper) cozeWrapper.remove();
        };

        // 清理函数
        const cleanup = () => {
            console.log('[CozeChat] Cleanup function called.');
            // 移除SDK脚本
            const scriptElement = document.querySelector('script[src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/cn/index.js"]');
            if (scriptElement) {
                console.log('[CozeChat] Removing SDK script.');
                scriptElement.remove();
            }

            // 移除添加的样式
            const styleElement = document.getElementById('coze-chat-styles');
            if (styleElement) {
                console.log('[CozeChat] Removing custom styles.');
                styleElement.remove();
            }

            removeExistingChatWidget();

            // 可选：如果 Coze SDK 在 window 对象上暴露了销毁方法，应该调用它
            // if (window.CozeWebSDK && typeof window.CozeWebSDK.destroy === 'function') {
            //     window.CozeWebSDK.destroy();
            // }
        };
        
        // 在加载新脚本前，执行一次清理，确保环境干净
        cleanup();

        // 动态加载Coze SDK脚本
        const loadCozeSDK = () => {
            console.log('[CozeChat] Loading Coze SDK script...');
            const script = document.createElement('script');
            script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/cn/index.js';
            script.async = true;
            script.onload = initCozeChat;
            script.onerror = () => {
                console.error('[CozeChat] Failed to load Coze SDK script.');
            };
            document.body.appendChild(script);
        };

        // 添加限制高度的CSS样式
        const addChatStyles = () => {
            // 如果样式已存在，则不重复添加
            if (document.getElementById('coze-chat-styles')) return;
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
            console.log('[CozeChat] Attempting to initialize Coze Chat.');
            if (window.CozeWebSDK) {
                console.log('[CozeChat] CozeWebSDK found on window.');
                addChatStyles();

                const botIdString = t('cozeid');
                const fallbackToken = 'pat_XK9xesrMxdPPnMq1QfuuJNrC3pmIsWmgOrCN2OOMwUInTIC7UZecLD4FUFjjgMY8'; // 您当前的备用Token
                const token = process.env.NEXT_PUBLIC_COZE_TOKEN || fallbackToken;

                console.log(`[CozeChat] Initializing with botId: "${botIdString}", Token used: ${token === fallbackToken && !process.env.NEXT_PUBLIC_COZE_TOKEN ? 'FALLBACK TOKEN' : 'Environment Token (or same as fallback)'}`);


                if (!botIdString) {
                    console.error("[CozeChat] Critical: Coze bot ID is not defined in translation files for the current locale. Cannot initialize.");
                    return;
                }
                if (!process.env.NEXT_PUBLIC_COZE_TOKEN && token === fallbackToken) {
                    console.warn("[CozeChat] Warning: Using a fallback Coze token. Ensure NEXT_PUBLIC_COZE_TOKEN is set in your .env.local file and the server was restarted.");
                }
                if (!token) { // 理论上因为有 fallback 不会到这里，但作为保险
                    console.error("[CozeChat] Critical: Coze token is effectively undefined. Cannot initialize.");
                    return; 
                }
                
                try {
                    new window.CozeWebSDK.WebChatClient({
                        config: {
                            bot_id: botIdString,
                        },
                        componentProps: {
                            title: 'Coze', 
                        },
                        auth: {
                            type: 'token',
                            token: token,
                            onRefreshToken: function () {
                                console.log('[CozeChat] onRefreshToken called.');
                                return token;
                            }
                        },
                        ui: {
                            base: {
                                icon: 'https://img-bsy.txrpic.com/preview/Element/00/00/89/11/E-891182-2418FE26A.png?imageMogr2/quality/90/thumbnail/320x%3E',
                                layout: 'pc',
                                zIndex: 1000,
                            },
                            footer: {
                                isShow: false
                              },
                              header: {
                                icon: 'https://tse3.mm.bing.net/th/id/OIP.CNkRqfGq0B6ONJkYDbCWmwAAAA?rs=1&pid=ImgDetMain',
                              },
                              chatBot: {
                                title: t('botchat'), // 修改这里
                            },
                            userInfo: {
                                id: '12345',
                                url: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
                                nickname: 'UserA',
                              }    
                          },
                    });
                    console.log('[CozeChat] Coze WebChatClient initialized successfully.');
                } catch (error) {
                    console.error('[CozeChat] Error during Coze WebChatClient initialization:', error);
                }
            } else {
                console.warn('[CozeChat] CozeWebSDK not found on window when initCozeChat was called. SDK script might not have loaded yet or failed.');
            }
        };

        loadCozeSDK();

        return cleanup; // 返回主清理函数
    }, [t]);

    return null;
}