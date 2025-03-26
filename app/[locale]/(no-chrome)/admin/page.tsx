'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Dashboard from '@/components/admin/Dashboard';

export default function AdminPage() {
    return (
        <AdminLayout>
            <Dashboard />
        </AdminLayout>
    );
}