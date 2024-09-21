import React, { useEffect, useState } from 'react';

export default function AIPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 初始化检测设备类型
  const [chatClient, setChatClient] = useState<any>(null); // 保持对聊天客户端的引用

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 每次窗口调整大小时重新检测是否为移动设备
    };

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    const script = document.createElement('script');
    script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/cn/index.js';
    script.onload = () => {
      // 如果已有聊天客户端实例，先销毁
      if (chatClient) {
        chatClient.destroy();
      }

      const newClient = new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7416321290841833506',
        },
        componentProps: {
          title: '陆向谦AI客服',
          icon: 'https://lf-bot-studio-plugin-resource.coze.cn/obj/bot-studio-platform-plugin-tos/artist/image/7e813aa2c7e14ebb9e2d1a989acfb128.png',
          width: isMobile ? 5 : 390, // 根据移动设备或者桌面设备调整宽度
          height: isMobile ? 1 : 200, // 根据移动设备或者桌面设备调整高度
        },
        el: document.getElementById('CozeWebSDK'),
      });

      setChatClient(newClient); // 存储聊天客户端实例
    };
    document.body.appendChild(script);

    // 清除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
      if (chatClient) {
        chatClient.destroy(); // 销毁聊天客户端
      }
    };
  }, [isMobile]); // 当isMobile变化时重新加载

  return (
    <>
      <div 
        id="position_demo" 
        style={{ position: 'absolute', right: '10px', bottom: '50px' }} 
      ></div>
    </>
  );
}
