/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-11 15:05:11
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 16:50:32
 * @FilePath: /lulab_website_next_js/components/next_ui/button_intl.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

'use client';

import React from "react";
import { Button } from "@nextui-org/react";
import { useParams } from 'next/navigation';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { IconEn } from '../icon/icon_en';
import { IconZh } from '../icon/icon_zh';

export default function ButtonIntl() {

    const router = useRouter();
    const pathname = usePathname() || '/';
    const params = useParams() || { locale: 'zh' };

    const handleChange = () => {
        const nextLocale = params.locale === 'en' ? 'zh' : 'en' as Locale; // Toggle between 'en' and 'zh'
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Button
            isIconOnly
            aria-label="Like"
            onPress={handleChange}
        >
            {params.locale === 'zh' ? <IconEn color="#306fe5" /> : <IconZh color="#306fe5" />}
        </Button>
    );
}

