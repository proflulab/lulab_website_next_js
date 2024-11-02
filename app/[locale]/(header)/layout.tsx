/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-08 03:01:48
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-02 14:41:47
 * @FilePath: /lulab_website_next_js/app/[locale]/(header)/layout.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import AppNav from '../../../components/navbar/navbar';
import React from 'react';

export default function HeaterLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        // <section>
        //     {/* Include shared UI here e.g. a header or sidebar */}
        //     {/* <nav></nav> */}

        //     {children}
        // </section>

        <html >
            <body>
                <React.StrictMode>
                    <AppNav />
                </React.StrictMode>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}