/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-11 02:49:22
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 15:06:16
 * @FilePath: /lulab_website_next_js/components/next_ui/dropdown_intl.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

'use client';

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useParams } from 'next/navigation';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { IconEn } from '../icon/icon_en';

export default function DropdownIntl() {


    const router = useRouter();
    const pathname = usePathname();
    const params = useParams() || { locale: 'zh' };

    const handleChange = (key: string) => {
        const nextLocale = key as Locale;
        const newPath = pathname || '/';
        router.replace(newPath, { ...params, locale: nextLocale });
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="solid"
                    color="primary"
                >
                    中/EN
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Action event example"
                color="primary"
                onAction={(key) => handleChange(String(key))}
            >
                <DropdownItem key="zh">中文</DropdownItem>
                <DropdownItem key="en">English</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

