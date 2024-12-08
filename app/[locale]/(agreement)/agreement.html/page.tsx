/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-03 04:21:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-08 10:03:44
 * @FilePath: /lulab_website_next_js/app/[locale]/agreement.html/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const AgreeMent: React.FC = () => {
    const [content, setContent] = useState('');
    const [activeSection, setActiveSection] = useState('');
    const [headings, setHeadings] = useState<Array<{ id: string; title: string }>>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch('/api/agreement');
                if (!response.ok) {
                    throw new Error('Failed to load agreement content');
                }
                const data = await response.json();
                if (data.content) {
                    setContent(data.content);
                    // Extract headings from content and clean up the titles
                    const extractedHeadings = data.content
                        .split('\n')
                        .filter((line: string) => line.startsWith('#'))
                        .map((heading: string) => ({
                            id: heading.replace(/[#\s]/g, ''),
                            title: heading.replace(/^#+\s+/, '') // Remove '#' symbols and leading spaces
                        }));
                    setHeadings(extractedHeadings);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchContent();
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('h1, h2, h3').forEach((heading) => {
            observer.observe(heading);
        });

        return () => {
            observer.disconnect();
        };
    }, [content]);

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-red-500 text-center">
                    <h2 className="text-xl font-bold mb-2">Error</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen">
            {/* 左侧固定目录 */}
            <nav className="hidden lg:block w-64 p-6 fixed h-screen overflow-y-auto bg-white shadow-md">
                <h2 className="text-xl font-bold mb-4">目录</h2>
                <ul className="space-y-2">
                    {headings.map((heading, index) => (
                        <li key={index}>
                            <button
                                onClick={() => scrollToSection(heading.id)}
                                className={`text-left w-full py-1 px-2 rounded hover:bg-gray-100 ${
                                    activeSection === heading.id ? 'bg-gray-100 font-semibold' : ''
                                }`}
                            >
                                {heading.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 主要内容区域 */}
            <main className="flex-1 p-6 lg:ml-64">
                <article className="max-w-3xl mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert prose-headings:scroll-mt-16">
                    <ReactMarkdown
                        components={{
                            h1: ({...props}) => <h1 id={props.children?.toString().replace(/[#\s]/g, '')} {...props} className="scroll-mt-16"/>,
                            h2: ({...props}) => <h2 id={props.children?.toString().replace(/[#\s]/g, '')} {...props} className="scroll-mt-16"/>,
                            h3: ({...props}) => <h3 id={props.children?.toString().replace(/[#\s]/g, '')} {...props} className="scroll-mt-16"/>
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </article>
            </main>
        </div>
    );
};

export default AgreeMent;