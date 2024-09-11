/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-09 22:27:17
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 15:33:44
 * @FilePath: /lulab_website_next_js/components/icon/icon_en.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import React from "react";

interface IconEnProps {
    color?: string;  // 定义可选的 color 属性，类型为字符串
}

export const IconEn: React.FC<IconEnProps> = ({ color = "#515151" }) => (
    <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4624"
        data-spm-anchor-id="a313x.collections_detail.0.i3.6e973a810kOqse"
        width="24"
        height="24"
    >
        <path
            d="M229.248 704V337.504h271.744v61.984h-197.76v81.28h184v61.76h-184v99.712h204.768V704h-278.72z m550.496 0h-70.24v-135.488c0-28.672-1.504-47.232-4.48-55.648a39.04 39.04 0 0 0-14.656-19.616 41.792 41.792 0 0 0-24.384-7.008c-12.16 0-23.04 3.328-32.736 10.016-9.664 6.656-16.32 15.488-19.872 26.496-3.584 11.008-5.376 31.36-5.376 60.992V704h-70.24v-265.504h65.248v39.008c23.168-30.016 52.32-44.992 87.488-44.992 15.52 0 29.664 2.784 42.496 8.352 12.832 5.6 22.56 12.704 29.12 21.376 6.592 8.672 11.2 18.496 13.76 29.504 2.56 11.008 3.872 26.752 3.872 47.264V704z"
            fill={color}
            p-id="4625"
            data-spm-anchor-id="a313x.collections_detail.0.i1.6e973a810kOqse"
        >
        </path>
        <path d="M160 144a32 32 0 0 0-32 32V864a32 32 0 0 0 32 32h688a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32H160z m0-64h688a96 96 0 0 1 96 96V864a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V176a96 96 0 0 1 96-96z"
            fill={color}
            p-id="4626"
            data-spm-anchor-id="a313x.collections_detail.0.i0.6e973a810kOqse"
        >
        </path>
    </svg>
);
