/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-25 13:03:41
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-25 18:57:22
 * @FilePath: /lulab_website_next_js/components/admin/AdminLayout.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
'use client';

import React from 'react';
import { usePathname, Link } from '@/i18n/routing';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, FolderKanban, Settings, User, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const pathname = usePathname();

    const NAV_ITEMS = [
        { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="h-5 w-5 mr-2" /> },
        { name: 'Projects', href: '/admin/projects', icon: <FolderKanban className="h-5 w-5 mr-2" /> },
        { name: 'Users', href: '/admin/users', icon: <Users className="h-5 w-5 mr-2" /> },
        { name: 'Settings', href: '/admin/settings', icon: <Settings className="h-5 w-5 mr-2" /> },
    ];

    const isActivePath = (currentPath: string, targetHref: string) => {
        if (targetHref === '/admin') return currentPath === targetHref;
        return currentPath.startsWith(targetHref);
    };
    const activeItem = NAV_ITEMS.find(item => isActivePath(pathname, item.href));

    return (
        <div className="min-h-screen bg-background grid grid-cols-[256px_1fr] gap-4 p-4">
            {/* Sidebar Navigation */}
            <Card className="sticky top-4 h-[calc(100vh-32px)] p-4">
                <h3 className="text-xl font-bold mb-6 text-center" aria-label="Admin Panel">
                    Admin Panel
                </h3>
                <nav className="space-y-2" aria-label="Main navigation">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block"
                            aria-current={isActivePath(pathname, item.href) ? 'page' : undefined}
                        >
                            <Button
                                variant={isActivePath(pathname, item.href) ? "default" : "ghost"}
                                className="w-full justify-start"
                            >
                                {item.icon}
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </Card>

            {/* Main Content */}
            <div className="flex flex-col gap-4">
                {/* Header Bar */}
                <Card className="sticky top-4 z-10 p-4">
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold">
                            {activeItem?.name}
                            {/* Management */}
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger aria-label="User menu">
                                <Avatar className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity">
                                    <AvatarImage src="/images/avatar-placeholder.png" alt="User profile" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem aria-label="Profile settings">
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem aria-label="Application settings">
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem aria-label="Log out">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </Card>

                {/* Content Area */}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}