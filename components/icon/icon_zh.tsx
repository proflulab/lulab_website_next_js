/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-09 22:27:17
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 16:06:40
 * @FilePath: /lulab_website_next_js/components/icon/icon_zh.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import React from "react";
interface IconEnProps {
    color?: string;  // 定义可选的 color 属性，类型为字符串
}

export const IconZh: React.FC<IconEnProps> = ({ color = "#515151" }) => (
    <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1599"
        width="24"
        height="24"
    >
        <path
            d="M160 144a32 32 0 0 0-32 32V864a32 32 0 0 0 32 32h688a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32H160z m0-64h688a96 96 0 0 1 96 96V864a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V176a96 96 0 0 1 96-96z"
            fill={color}
            p-id="1600"
        >
        </path>
        <path
            d="M482.176 262.272h59.616v94.4h196v239.072h-196v184.416h-59.616v-184.416H286.72v-239.04h195.456V262.24z m-137.504 277.152h137.504v-126.4H344.64v126.4z m197.12 0h138.048v-126.4H541.76v126.4z"
            fill={color}
            p-id="1601"
        >
        </path>
    </svg>
);
