/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-03 04:21:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-03 04:25:58
 * @FilePath: /lulab_website_next_js/app/[locale]/agreement.html/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';




const AgreeMent: React.FC = () => {
    const filePath = path.join(process.cwd(), 'public', 'md/Agreement.md');

    // Read and parse the markdown file content at build time
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);

    return (
        <div style={{ margin: '0 300px' }}> {/* 设置左右边距 */}
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default AgreeMent;