/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-10-30 01:42:07
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-11-02 08:41:56
 * @FilePath: /lulab_website_next_js/components/avatar/avatar.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

// import { auth } from "../../auth"
// import { useTranslations } from 'next-intl';
// import {
//     Navbar,
//     Avatar,
//     NavbarBrand,
//     NavbarContent,
//     NavbarItem,
//     NavbarMenuToggle,
//     NavbarMenu,
//     NavbarMenuItem,
//     Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User
// } from "@nextui-org/react";
// import { Link, usePathname } from '@/i18n/routing';


// export default async function UserAvatar() {
//     const session = await auth()

//     const t = useTranslations('AppNav');

//     if (!session || !session.user) return (

//         <Button as={Link} color="primary" href="/api/auth/signin" variant="flat">
//             {t('login')}
//         </Button>

//     )

//     return (

//         <Dropdown placement="bottom-end">
//             <DropdownTrigger>
//                 <Avatar
//                     isBordered
//                     as="button"
//                     className="transition-transform"
//                     src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//                 />
//             </DropdownTrigger>
//             <DropdownMenu aria-label="Profile Actions" variant="flat">
//                 <DropdownItem key="profile" className="h-14 gap-2">
//                     <p className="font-semibold">Signed in as</p>
//                     <p className="font-semibold">zoey@example.com</p>
//                 </DropdownItem>
//                 <DropdownItem key="settings">
//                     My Settings
//                 </DropdownItem>
//                 <DropdownItem key="team_settings">Team Settings</DropdownItem>
//                 <DropdownItem key="analytics">
//                     Analytics
//                 </DropdownItem>
//                 <DropdownItem key="system">System</DropdownItem>
//                 <DropdownItem key="configurations">Configurations</DropdownItem>
//                 <DropdownItem key="help_and_feedback">
//                     Help & Feedback
//                 </DropdownItem>
//                 <DropdownItem key="logout" color="danger">
//                     Log Out
//                 </DropdownItem>
//             </DropdownMenu>
//         </Dropdown>

//     )
// }