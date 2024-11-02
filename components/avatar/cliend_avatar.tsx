/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-10-30 01:20:41
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-01 00:42:40
 * @FilePath: /lulab_website_next_js/components/avatar/cliend_avatar.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


"use client"

import { useSession } from "next-auth/react"
import { useTranslations } from 'next-intl';
import {
    Avatar, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem
} from "@nextui-org/react";
import { signOut } from "next-auth/react"
import { Link } from '@/i18n/routing';

export default function UserAvatar() {
    const { data: session } = useSession()

    const t = useTranslations('AppNav');
    console.log(session)
    if (!session || !session.user) {
        return (
            <Link
                href={'/signin'}
            >
                <Button color="primary" variant="flat" >
                    {t('login')}
                </Button>
            </Link>
        )
    }

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src='https://images.unsplash.com/broken'
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{session.user.email}</p>
                </DropdownItem>
                {/* <DropdownItem key="settings">
                    My Settings
                </DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">
                    Analytics
                </DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                    Help & Feedback
                </DropdownItem> */}
                <DropdownItem key="logout" color="danger" onPress={() => signOut()}>
                    {t('log_out')}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>)
}





