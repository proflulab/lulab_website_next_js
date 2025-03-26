'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import UserManager from '@/components/admin/UserManager';

export default function UsersPage() {
    return (
        <AdminLayout>
            <UserManager />
        </AdminLayout>
    );
}