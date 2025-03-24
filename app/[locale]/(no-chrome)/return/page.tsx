'use client';

import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useTranslations } from 'next-intl';

export default function ReturnPage() {
  const t = useTranslations('ReturnPage');
  const [status, setStatus] = useState<string | null>(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    if (!sessionId) {
      redirect('/');
      return;
    }

    // 检查是否已经发送过邮件
    const sentEmailFlag = localStorage.getItem(`email_sent_${sessionId}`);
    if (sentEmailFlag) {
      setEmailSent(true);
    }

    fetch(`/api/stripe/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Stripe session data:', JSON.stringify(data, null, 2));
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
        setOrderId(data.payment_intent);
      })
      .catch((error) => {
        console.error('Error fetching session:', error);
        redirect('/');
      });
  }, []);

  useEffect(() => {
    // 当状态为 complete 且有客户邮箱时发送确认邮件
    if (status === 'complete' && customerEmail && !emailSent) {
      const sessionId = new URLSearchParams(window.location.search).get('session_id');

      // 再次检查本地存储，防止并发请求
      if (sessionId && !localStorage.getItem(`email_sent_${sessionId}`)) {
        fetch('/api/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerEmail,
            orderId,
          }),
        })
          .then((res) => res.json())
          .then(() => {
            setEmailSent(true);
            // 设置本地存储标记
            localStorage.setItem(`email_sent_${sessionId}`, 'true');
          })
          .catch((error) => {
            console.error('发送确认邮件失败:', error);
          });
      }
    }
  }, [status, customerEmail, emailSent, orderId]);

  if (status === 'open') {
    redirect('/');
  }

  if (status === 'complete') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <section id="success" className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* 成功图标动画 */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {t('paymentSuccess')}
          </h2>

          {/* 订单信息卡片 */}
          <div className="bg-gray-50 rounded-md p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">{t('orderConfirmation')}</h3>
            <p className="text-gray-600 mb-2">
              {t(emailSent ? 'emailStatus.sent' : 'emailStatus.sending')}
              <span className="font-medium">{customerEmail}</span>
            </p>
            <p className="text-gray-600 mb-2">
              {t('orderId')} <span className="font-medium">{orderId}</span>
            </p>
          </div>

          {/* 客服支持信息 */}
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">
              {t('customerSupport.title')}
            </p>
            <a
              href="mailto:orders@lulabs.org"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium underline"
            >
              {t('customerSupport.email')}
            </a>
          </div>

          {/* 操作按钮 */}
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {t('buttons.returnHome')}
            </Link>
            {/* <Link
              href="/dashboard/orders"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('buttons.viewOrders')}
            </Link> */}
          </div>
        </section>
      </div>
    );
  }

  return <div className="flex justify-center p-8"><LoadingSpinner /></div>;
}
