/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-03 04:21:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-31 16:42:13
 * @FilePath: /lulab_website_next_js/app/[locale]/agreement.html/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

"use client"

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './styles.css';

const AgreeMent: React.FC = () => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/agreement');
                if (!response.ok) {
                    throw new Error('获取协议内容失败');
                }
                const data = await response.json();
                setContent(data.content);
            } catch (err) {
                setError(err instanceof Error ? err.message : '未知错误');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="agreement-container">
                <div className="agreement-content">加载中...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="agreement-container">
                <div className="agreement-content">{error}</div>
            </div>
        );
    }

    return (
        <div className="agreement-container">
            <div className="agreement-content">
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => <h1 className="agreement-title">{children}</h1>,
                        h2: ({ children }) => <h2 className="agreement-subtitle">{children}</h2>,
                        p: ({ children }) => <p className="agreement-paragraph">{children}</p>,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default AgreeMent;