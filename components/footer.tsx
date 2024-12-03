/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-28 15:45:22
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-03 15:48:12
 * @FilePath: /lulab_website_next_js/components/footer.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

// 抽取导航链接配置
const QUICK_LINKS = [
    { href: '/about', translationKey: 'about' },
    { href: '/course', translationKey: 'courses' },
    // { href: '/join', translationKey: 'joinUs' },
] as const;

// 抽取联系方式配置
const CONTACT_INFO = [
    { icon: Mail, translationKey: 'email' },
    { icon: MapPin, translationKey: 'address' },
] as const;

// 抽取 Footer Column 组件
function FooterColumn({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h3 className="font-bold text-lg mb-4">{title}</h3>
            {children}
        </div>
    );
}

export function Footer() {
    const t = useTranslations('Footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary py-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <FooterColumn title={t('title')}>
                        <p className="text-muted-foreground">
                            {t('slogan')}
                        </p>
                    </FooterColumn>

                    <FooterColumn title={t('quickLinks')}>
                        <ul className="space-y-2">
                            {QUICK_LINKS.map(({ href, translationKey }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                    >
                                        {t(translationKey)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn title={t('contact')}>
                        <ul className="space-y-2">
                            {CONTACT_INFO.map(({ icon: Icon, translationKey }) => (
                                <li
                                    key={translationKey}
                                    className="flex items-center gap-2 text-muted-foreground"
                                >
                                    <Icon className="h-4 w-4 flex-shrink-0" />
                                    {t(translationKey)}
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn title={t('followUs')}>
                        <p className="text-muted-foreground">
                            {t('wechat')}
                        </p>
                    </FooterColumn>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
                    <p>{t('copyright', { year: currentYear })}</p>
                </div>
            </div>
        </footer>
    );
}