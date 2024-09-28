/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-09 22:26:40
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 16:50:45
 * @FilePath: /lulab_website_next_js/components/navbar/navbar.tsx
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
    Button
} from "@nextui-org/react";
import { IconLogo } from "../icon/icon_logo";
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
// import DropdownIntl from '../next_ui/dropdown_intl';
import ButtonIntl from '../next_ui/button_intl';


export default function AppNav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()
    const t = useTranslations('AppNav');

    const menuItems = [
        { label: t('about'), href: "/about" },
        // { label: t('course'), href: "/course" },
        // { label: t('clubs'), href: "/clubs" },
        // { label: t('admissions'), href: "/admissions" },
        // { label: t('join_us'), href: "/join" }
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
                        <IconLogo />
                        <p className="font-bold text-inherit">{t('title')}</p>
                    </div>
                </Link>
            </NavbarBrand>

            {/* 中间内容：仅在大屏显示 */}
            {/** 移除了 NavbarContent的 justify="center" */}
            <NavbarContent className="hidden sm:flex gap-8">
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
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">{t('login')}</Link>
                </NavbarItem> */}
                <NavbarItem className="hidden lg:flex">
                    <ButtonIntl />
                </NavbarItem>
                {/* <NavbarItem>
                    <Button as={Link} color="primary" href="/login" variant="flat">
                        {t('login')}
                    </Button>
                </NavbarItem> */}
                {/* <NavbarItem className="hidden lg:flex">
                    <DropdownIntl />
                </NavbarItem> */}
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
