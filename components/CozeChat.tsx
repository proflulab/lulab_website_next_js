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

import { useEffect, useRef } from 'react'; // 导入 useRef
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
                    };
                    footer: {
                        isShow: boolean;
                    };
                    header: {
                        icon: string;
                    };
                    chatBot: {
                        title: string;
                        el?: HTMLElement;
                    };
                    userInfo: {
                        id: '12345';
                        url: string;
                        nickname: string;
                    };
                }; // 添加 el 属性到类型定义
            }) => void;
            // 如果SDK提供销毁方法，可以在这里添加类型
            // destroy?: () => void;
        };
    }
}

export default function CozeChat() {
    const t = useTranslations('CozeChat');
    const cozeChatContainerRef = useRef<HTMLDivElement>(null); // 创建一个 ref 用于容器元素
    const isInitialized = useRef(false); // 添加一个 ref 来跟踪是否已初始化

    useEffect(() => {
        console.log('[CozeChat] useEffect triggered. Current locale/translation key for cozeid:', t('cozeid'));

        // 如果已经初始化过，则直接返回，避免重复加载和初始化
        // 这里的检查仍然保留，作为双重保险
        if (isInitialized.current) {
            console.log('[CozeChat] SDK already initialized, skipping useEffect run.');
            return;
        }


        // 清理函数
        const cleanup = () => {
            console.log('[CozeChat] Cleanup function called.');
            // 移除SDK脚本
            // 注意：如果组件频繁挂载/卸载，移除脚本可能不是最佳策略，
            // 更好的方法是确保脚本只加载一次。但保留此清理以防万一。
            const scriptElement = document.querySelector('script[src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/cn/index.js"]');
            if (scriptElement) {
                console.log('[CozeChat] Removing SDK script.');
                // scriptElement.remove(); // 暂时注释掉脚本移除，依赖于加载时的检查
            }

            // 移除添加的样式 (使用 el 后不再需要这些样式，但清理函数保留以防万一)
            const styleElement = document.getElementById('coze-chat-styles');
            if (styleElement) {
                console.log('[CozeChat] Removing custom styles.');
                styleElement.remove();
            }

            // 使用 el 后，SDK 不会创建默认的聊天窗口元素，所以这里可能不需要清理
            // removeExistingChatWidget(); // 此处调用也被注释掉了

            // 可选：如果 Coze SDK 在 window 对象上暴露了销毁方法，应该调用它
            // if (window.CozeWebSDK && typeof window.CozeWebSDK.destroy === 'function') {
            //     window.CozeWebSDK.destroy();
            // }

            // 在组件卸载时重置初始化状态
            isInitialized.current = false;
        };

        // 在加载新脚本前，执行一次清理，确保环境干净
        // cleanup(); // 暂时注释掉这里的 cleanup 调用，依赖于 useEffect 开头的 isInitialized 检查

        // 动态加载Coze SDK脚本
        const loadCozeSDK = () => {
            // 检查脚本是否已经存在
            const existingScript = document.querySelector('script[src="https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/cn/index.js"]');
            if (existingScript) {
                console.log('[CozeChat] SDK script already exists, skipping load.');
                // 如果脚本已存在，并且 SDK 尚未初始化，尝试手动初始化
                if (window.CozeWebSDK && !isInitialized.current) {
                    console.log('[CozeChat] SDK script exists, SDK available, but not initialized. Attempting manual init.');
                    initCozeChat(); // 尝试初始化
                }
                return; // 脚本已存在，不再重复添加
            }

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

        // 初始化Coze客服
        const initCozeChat = async () => { // Make initCozeChat async
            console.log('[CozeChat] Attempting to initialize Coze Chat.');
            // 检查 SDK, 容器 ref 和初始化状态
            if (window.CozeWebSDK && cozeChatContainerRef.current && !isInitialized.current) {
                console.log('[CozeChat] CozeWebSDK found and container ref is available, initializing...');
                // addChatStyles(); // 使用 el 后不再需要调用此函数

                const botIdString = t('cozeid');
                // Fetch token from API route
                let token = null;
                try {
                    const response = await fetch('/api/coze-token', { method: 'POST' }); // 修改为 POST 请求
                    if (response.ok) {
                        const data = await response.json();
                        token = data.token;
                        console.log('[CozeChat] Token fetched successfully from API.');
                    } else {
                        console.error('[CozeChat] Failed to fetch token from API:', response.status, response.statusText);
                        // Fallback to the old method if API fails (optional, for development/testing)
                        // token = process.env.NEXT_PUBLIC_COZE_TOKEN;
                        // console.warn('[CozeChat] Falling back to NEXT_PUBLIC_COZE_TOKEN.');
                    }
                } catch (error) {
                    console.error('[CozeChat] Error fetching token from API:', error);
                    // Fallback to the old method if fetch fails (optional)
                    // token = process.env.NEXT_PUBLIC_COZE_TOKEN;
                    // console.warn('[CozeChat] Falling back to NEXT_PUBLIC_COZE_TOKEN.');
                }


                console.log(`[CozeChat] Initializing with botId: "${botIdString}", Token obtained: ${token ? 'Successfully obtained' : 'Failed to obtain'}`);


                if (!botIdString) {
                    console.error("[CozeChat] Critical: Coze bot ID is not defined in translation files for the current locale. Cannot initialize.");
                    return;
                }
                if (!token) {
                    console.error("[CozeChat] Critical: Coze token is undefined. Cannot initialize.");
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
                                // Re-fetch token if refresh is needed, or return the current one if SDK handles refresh
                                // For simplicity, returning the current token. A more robust solution might re-fetch.
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
                                title: t('botchat'),
                                el: cozeChatContainerRef.current // 修改这里
                                // 移除 height 属性，高度由容器 div 的 style 控制
                                // height: 600
                            },
                            userInfo: {
                                id: '12345',
                                url: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
                                nickname: 'UserA',
                            }
                        },
                        // 将容器元素传递给 SDK
                        // 可以根据需要添加 onShow 和 onHide 回调来控制容器的显示/隐藏
                        // onShow: () => { if (cozeChatContainerRef.current) cozeChatContainerRef.current.style.display = 'block'; },
                        // onHide: () => { if (cozeChatContainerRef.current) cozeChatContainerRef.current.style.display = 'none'; },
                    });
                    console.log('[CozeChat] Coze WebChatClient initialized successfully with custom container.');
                    isInitialized.current = true; // 初始化成功后设置标志
                } catch (error) {
                    console.error('[CozeChat] Error during Coze WebChatClient initialization:', error);
                }
            } else if (isInitialized.current) {
                console.log('[CozeChat] initCozeChat called but already initialized.');
            } else {
                console.warn('[CozeChat] initCozeChat called but CozeWebSDK not found or container ref is not available.');
            }
        };

        loadCozeSDK();

        // 返回清理函数，在组件卸载时执行
        return cleanup;
    }, [t]); // 依赖项包括 t

    // 在组件中渲染一个 div 作为 Coze 聊天框的容器
    // 通过 style 属性设置其宽度、高度、位置等
    return (
        <div
            ref={cozeChatContainerRef}
            id="coze-chat-container"
            style={{
                width: '460px', // 设置宽度
                height: '800px', // 建议使用 height 而不是 maxHeight 来强制固定高度，或者使用更大的 vh 值
                position: 'fixed', // 固定定位
                bottom: '20px', // 距离底部 20px
                right: '20px', // 距离右侧 20px
                zIndex: 1000, // 设置层级
                // 可以根据需要添加其他样式，例如 border, boxShadow 等
                // display: 'block', // 初始显示状态，如果需要根据 SDK 回调控制，可以设置为 'none'
            }}
        >
            {/* Coze SDK 会将聊天框内容渲染到这个 div 内部 */}
        </div>
    );
}