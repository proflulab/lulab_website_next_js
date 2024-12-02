/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-11-28 15:45:22
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-12-02 14:35:56
 * @FilePath: /lulab_website_next_js/components/footer.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import Link from "next/link";
// import { Mail, Phone, MapPin } from "lucide-react";
import { Mail, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-secondary py-12">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('title')}</h3>
                        <p className="text-muted-foreground">
                            {t('slogan')}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('quickLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary">
                                    {t('about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-muted-foreground hover:text-primary">
                                    {t('courses')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/join" className="text-muted-foreground hover:text-primary">
                                    {t('joinUs')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('contact')}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                {t('email')}
                            </li>
                            {/* <li className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                {t('phone')}
                            </li> */}
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                {t('address')}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('followUs')}</h3>
                        <p className="text-muted-foreground">
                            {t('wechat')}
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
                    <p>{t('copyright', { year: new Date().getFullYear() })}</p>
                </div>
            </div>
        </footer>
    );
}