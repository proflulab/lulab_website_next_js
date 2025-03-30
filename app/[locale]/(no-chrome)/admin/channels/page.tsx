'use client';

import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import ChannelManager from '@/components/admin/ChannelManager';

export default function ChannelsPage() {
    return (
        <AdminLayout>
            <ChannelManager />
        </AdminLayout>
    );
}