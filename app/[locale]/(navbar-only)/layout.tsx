/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-18 11:10:50
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-23 21:12:32
 * @FilePath: /lulab_website_next_js/app/[locale]/(navbar-only)/layout.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */


import Navbar from '@/components/navbar/navbar';


export default function NavbarOnlyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}