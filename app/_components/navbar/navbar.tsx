/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-09 22:26:40
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-10 16:04:54
 * @FilePath: /lulab_website_next_js/app/_components/navbar/navbar.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

'use client'

import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";
import { AcmeLogo } from "./acmeLogo";
import { usePathname } from 'next/navigation'

export default function AppNav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    const menuItems = [
        { label: "About", href: "/about" },
        { label: "Course", href: "/course" },
        { label: "Clubs", href: "/clubs" },
        { label: "Admissions", href: "/admissions" },
        { label: "Join Us", href: "/join" }
    ];

    const pMenuItems = [...menuItems, ...[{ label: "Log Out", href: "/logout" },],];



    return (
        <Navbar shouldHideOnScroll isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

            {/* 移动端菜单切换按钮 */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            {/* 左侧品牌 */}
            <NavbarBrand>
                <Link color="foreground" href="/">
                    <div className="flex items-center gap-4">
                        <AcmeLogo />
                        <p className="font-bold text-inherit">LU LAB</p>
                    </div>
                </Link>
            </NavbarBrand>

            {/* 中间内容：仅在大屏显示 */}
            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} isActive={pathname === item.href}>
                        <Link
                            href={item.href}
                            style={{
                                color: pathname === item.href ? 'red' : 'inherit', // 当前路由项显示红色
                                fontWeight: pathname === item.href ? 'bold' : 'normal'
                            }}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* 中间内容：引入新的 MenuContent 组件 */}
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* 移动端菜单 */}
            <NavbarMenu>
                {pMenuItems.map((item, index) => (
                    <NavbarMenuItem key={index} isActive={pathname === item.href}>
                        <Link
                            href={item.href}
                            style={{
                                color: pathname === item.href ? 'red' : 'inherit', // 当前路由项显示红色
                                fontWeight: pathname === item.href ? 'bold' : 'normal'
                            }}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}
