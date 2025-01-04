'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function PaymentSuccessPage() {
    const searchParams = useSearchParams();
    const payment_intent = searchParams.get('payment_intent');

    useEffect(() => {
        // Here you can verify the payment status with your backend
        if (payment_intent) {
            // Verify payment status
            console.log('Payment Intent:', payment_intent);
        }
    }, [payment_intent]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
            >
                <h1 className="text-4xl font-bold mb-4">支付成功！</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    感谢您的报名，我们会尽快与您联系。
                </p>
                <a
                    href="/"
                    className="text-primary hover:text-primary/90 underline"
                >
                    返回首页
                </a>
            </motion.div>
        </div>
    );
}
