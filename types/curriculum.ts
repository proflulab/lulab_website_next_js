/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-26 12:09:46
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-26 12:11:26
 * @FilePath: /lulab_website_next_js/types/curriculum.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */

export interface Curriculum {
    id?: string;
    project_id: string;
    title: string;
    description: string;
    week: number;
    topics: string[];
    goals: string[] | null;
}