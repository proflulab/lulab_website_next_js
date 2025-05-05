'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

// 定义组件属性接口
interface AICustomerServiceProps {
  height?: number | string; // 支持数字或CSS字符串(如'500px'或'80vh')
  width?: number | string;  // 支持数字或CSS字符串
  floatButtonStyle?: Record<string, any>;
  chatWindowStyle?: Record<string, any>;
  botConfig?: {
    botId: string;
    token: string;
    language: string;
  };
  defaultOpen?: boolean;
  autoShowDelay?: number;
}

const AICustomerService: React.FC<AICustomerServiceProps> = ({
  height = 300, // 默认高度
  width = 300,  // 默认宽度
  floatButtonStyle,
  chatWindowStyle,
  botConfig,
  defaultOpen,
}) => {
  const t = useTranslations('ReturnPage.customerSupport');
  const cozeTargetRef = useRef<HTMLDivElement>(null);

  const processSize = (size: number | string): string => {
    if (typeof size === 'number') return `${size}px`;
    return size;
  };

  const heightValue = processSize(height);
  const widthValue = processSize(width);

  useEffect(() => {
    if (typeof window === 'undefined' || !cozeTargetRef.current) {
      return;
    }

    const cozeTargetElement = cozeTargetRef.current;
    const styleId = 'coze-service-style';
    let style = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }

    // --- 更新CSS样式 ---
    // 请使用开发者工具检查实际的类名并替换下面的选择器
    // 示例：如果发现聊天窗口是 <div class="coze-chat-window-real-class">...</div>
    // 就把 .coze-chat-container 替换或补充为 .coze-chat-window-real-class
    style.innerHTML = `
      /* 目标渲染容器 */
      .coze-render-target {
        width: ${widthValue};
        height: ${heightValue}; /* 尝试让容器高度确定 */
        position: relative;
        overflow: hidden !important;
        box-sizing: border-box !important;
      }

      /* 尝试直接控制 Coze SDK 的主要聊天窗口容器 */
      /* !!! 请用开发者工具检查并替换为实际的类名 !!! */
      .coze-chat-container, /* 这是一个可能的类名 */
      div[class*="chat-window"], /* 另一个可能的模式 */
      #coze-chat-window-id /* 如果有ID，使用ID更精确 */
      {
        height: 100%!important; /* 高度通常应填充容器 */
        width: 100% !important; /* 宽度通常应填充容器 */
        box-sizing: border-box !important;
        display: flex !important; /* 尝试flex布局控制内部 */
        flex-direction: column !important;
      }

      /* 尝试控制内部滚动区域 */
      /* !!! 请用开发者工具检查并替换为实际的类名 !!! */
      .coze-message-list-container, /* 示例类名 */
      div[class*="message-list"],
      div[class*="scroll-area"]
       {
        flex-grow: 1 !important; /* 让消息列表填充剩余空间 */
        overflow-y: auto !important;
        height: auto !important; /* 高度自适应 */
        max-height: none !important; /* 移除可能冲突的max-height */
      }

      /* 确保iframe (如果存在) 填充其容器 */
      .coze-render-target iframe,
      iframe[id^="coze-"] {
        width: 100% !important;
        height: 100% !important;
        border: none !important;
        display: block !important;
      }

      /* --- 从 addChatStyles 融合的样式 --- */
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
              bottom: 20px !important; /* 调整聊天窗口的位置 */
              right: 20px !important;
          }
          iframe[class*="b47a01a7e24cbec6131b"] {
              max-height: 600px !important; /* PC端固定iframe高度 */
          }
      }
      /* --- 融合样式结束 --- */
    `;

    // 清理旧实例
    cozeTargetElement.innerHTML = '';
    const existingScript = document.getElementById('coze-sdk-script');
    if (existingScript) existingScript.remove();

    // 注入Coze脚本并初始化
    const script = document.createElement('script');
    script.id = 'coze-sdk-script';
    // 修正：移除 URL 字符串中的反引号
    script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/cn/index.js';
    script.async = true;
    script.onload = () => {
      // 修正：将 CozeWebSDK 不可用或元素丢失的检查放在前面
      if (!(window as any).CozeWebSDK || !document.body.contains(cozeTargetElement)) {
        console.error('CozeWebSDK不可用或目标元素在SDK加载时丢失。');
        return; // 提前退出
      }

      // 现在可以安全地尝试初始化
      try {
        const botId = botConfig?.botId || process.env.NEXT_PUBLIC_COZE_BOT_ID;
        const token = botConfig?.token || process.env.NEXT_PUBLIC_COZE_TOKEN;

        if (!botId || !token) {
          console.error('Coze Bot ID 或 Token 未配置。请检查 botConfig prop 或环境变量。');
          return; // 提前退出，避免初始化失败
        }

        // 内部 try...catch 保留，用于捕获初始化本身的错误
        try {
          console.log(`初始化Coze SDK，期望高度: ${heightValue}, 宽度: ${widthValue}`);

          new (window as any).CozeWebSDK.WebChatClient({
            container: cozeTargetElement, // 指定渲染容器
            config: {
              bot_id: botId, // 使用获取到的 botId
              language: botConfig?.language || 'zh',
            },
            componentProps: {
              title: t('title') || '客户服务',
              // --- 重点：尝试通过SDK配置传递尺寸 ---
              width: typeof width === 'number' ? width : undefined, // SDK可能只接受数字
              height: typeof height === 'number' ? height : undefined, // SDK可能只接受数字
              defaultOpen: defaultOpen || false,
              floatButtonProps: {
                style: floatButtonStyle || {},
              },
              // chatWindowProps 也可以尝试设置样式，但优先级可能低于 componentProps
              chatWindowProps: {
                 style: {
                   ...chatWindowStyle,
                   // 也在这里尝试设置，以防 componentProps 不生效
                   height: heightValue,
                   maxHeight: heightValue,
                   width: widthValue,
                 },
              },
              // ... 其他配置
            },
            auth: {
              type: 'token',
              token: token, // 使用获取到的 token
              onRefreshToken: function () {
                // 在实际应用中，这里应该有刷新 token 的逻辑
                // 暂时返回同一个 token
                return token;
              }
            }
          });

        } catch (initError) { // 捕获 WebChatClient 初始化错误
          console.error('初始化AI客服失败:', initError);
        }

      } catch (configError) { // 捕获获取配置或检查时的潜在错误 (虽然可能性较低)
        console.error('处理 Coze 配置时出错:', configError);
      }
    };
    script.onerror = () => {
      console.error('加载Coze SDK脚本失败。');
    };
    document.body.appendChild(script);

    // 清理函数
    return () => {
      console.log('清理Coze组件。');
      const styleElement = document.getElementById(styleId);
      if (styleElement) styleElement.remove();
      const scriptElement = document.getElementById('coze-sdk-script');
      if (scriptElement) scriptElement.remove();
      // 尝试找到并移除Coze可能添加到body的其他元素
      document.querySelectorAll('.coze-chat-container, div[id^="coze-"]').forEach(el => {
         if (!cozeTargetElement || !cozeTargetElement.contains(el)) {
           el.remove();
         }
      });
      if (cozeTargetElement && document.body.contains(cozeTargetElement)) {
        cozeTargetElement.innerHTML = '';
      }
    };
    // 依赖项更新，确保 height/width 变化时重新执行
  }, [t, height, width, heightValue, widthValue, botConfig, chatWindowStyle, floatButtonStyle, defaultOpen]);

  return (
    <div
      ref={cozeTargetRef}
      className="coze-render-target" // 这个容器本身应用样式
      style={{
        width: widthValue,
        height: heightValue, // 直接给容器设置高度
        position: 'relative', // 保持相对定位
        overflow: 'hidden' // 隐藏溢出内容
      }}
      data-height={heightValue}
      data-width={widthValue}
    >
      {/* Coze SDK 将会渲染到这里 */}
    </div>
  );
};

export default AICustomerService;
