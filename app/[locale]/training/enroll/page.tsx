/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-03 19:50:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-04 19:22:15
 * @FilePath: /lulab_website_next_js/app/[locale]/training/enroll/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useCallback } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useToast } from "@/components/ui/use-toast";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

function CheckoutForm({ formData }: { formData: FormData }) {
    const stripe = useStripe();
    const elements = useElements();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        if (!stripe || !elements) {
            setIsSubmitting(false);
            return;
        }

        try {
            const { error } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/payment-success`,
                    payment_method_data: {
                        billing_details: {
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone,
                        }
                    }
                },
            });

            if (error) {
                setErrorMessage(error.message || '支付过程中出现错误');
                toast({
                    variant: "destructive",
                    title: "支付错误",
                    description: error.message,
                });
            }
        } catch (err) {
            console.error('Payment error:', err);
            setErrorMessage('支付处理过程中发生错误，请稍后重试');
        }
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <PaymentElement />
            {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600">{errorMessage}</p>
                </div>
            )}
            <Button
                type="submit"
                disabled={isSubmitting || !stripe}
                className="w-full"
            >
                {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>处理中...</span>
                    </div>
                ) : (
                    '确认支付'
                )}
            </Button>
        </form>
    );
}

export default function EnrollPage() {
    const [clientSecret, setClientSecret] = useState('');
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
    const { toast } = useToast();

    const validateForm = useCallback((): boolean => {
        const errors: Partial<FormData> = {};
        if (!formData.name) errors.name = '请输入姓名';
        if (!formData.email) {
            errors.email = '请输入邮箱';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = '请输入有效的邮箱地址';
        }
        if (!formData.phone) {
            errors.phone = '请输入电话号码';
        } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
            errors.phone = '请输入有效的手机号码';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }, [formData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (formErrors[name as keyof FormData]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    useEffect(() => {
        if (!validateForm()) return;

        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: 6880,
                metadata: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    toast({
                        variant: "destructive",
                        title: "错误",
                        description: "创建支付请求失败，请刷新页面重试",
                    });
                    return;
                }
                setClientSecret(data.clientSecret);
            })
            .catch((err) => {
                console.error('Failed to create payment intent:', err);
                toast({
                    variant: "destructive",
                    title: "系统错误",
                    description: "创建支付请求失败，请刷新页面重试",
                });
            });
    }, [formData, toast, validateForm]);

    const appearance = {
        theme: 'flat' as const,
        variables: {
            colorPrimary: '#ff0000',
        },
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <div>
                    <h1 className="text-3xl font-bold">课程报名</h1>
                    <p className="text-gray-600 mt-2">请填写以下信息完成报名</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <Label htmlFor="name">姓名</Label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="请输入您的姓名"
                            className={formErrors.name ? 'border-red-500' : ''}
                        />
                        {formErrors.name && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="email">邮箱</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="请输入您的邮箱"
                            className={formErrors.email ? 'border-red-500' : ''}
                        />
                        {formErrors.email && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="phone">电话</Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="请输入您的联系电话"
                            className={formErrors.phone ? 'border-red-500' : ''}
                        />
                        {formErrors.phone && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="message">留言（选填）</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="如有特殊需求请在此说明"
                        />
                    </div>
                </div>

                {clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                        <CheckoutForm formData={formData} />
                    </Elements>
                )}
            </motion.div>
        </div>
    );
}