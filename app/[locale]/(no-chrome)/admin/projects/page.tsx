/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-25 12:23:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-25 17:52:09
 * @FilePath: /lulab_website_next_js/app/[locale]/(no-chrome)/admin/projects/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import ProjectManager from '@/components/admin/ProjectManager';

export default function ProjectsPage() {
    return (
        <AdminLayout>
            <div className="space-y-6">
                <ProjectManager />
            </div>
        </AdminLayout>
    );
}