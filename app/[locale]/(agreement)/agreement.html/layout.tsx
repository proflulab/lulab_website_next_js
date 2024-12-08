import React from 'react';
import Navbar from '@/components/navbar/navbar';

export default function AgreementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <React.StrictMode>
                <Navbar />
            </React.StrictMode>
            <main>
                {children}
            </main>
        </div>
    );
}
