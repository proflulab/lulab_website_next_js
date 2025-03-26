/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-26 11:12:30
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-26 11:51:08
 * @FilePath: /lulab_website_next_js/types/project.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */

// types.ts
export interface Project {
    id?: string; // 确保 id 不可为 undefined
    title: string;
    subtitle: string;
    category: string;
    image: string;
    duration: string;
    level: string;
    max_students: number;
    description: string;
    slug: string;
    prerequisites: string[];
    outcomes: string[];
}