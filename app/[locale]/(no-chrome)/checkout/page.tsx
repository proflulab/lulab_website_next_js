/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-05 17:16:02
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-30 23:27:39
 * @FilePath: /lulab_website_next_js/app/[locale]/(no-chrome)/checkout/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

'use client';

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useSearchParams } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [channelCode, setChannelCode] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // 从URL参数中获取渠道代码
    const channel = searchParams.get('channel');
    if (channel) {
      setChannelCode(channel);
      console.log("Setting channelCode to:", channel);
    } else {
      console.log("No channel parameter found in URL");
    }
  }, [searchParams]);

  useEffect(() => {
    if (channelCode) {
      fetch("/api/stripe/checkout_sessions", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channelCode: channelCode
        }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [channelCode]);

  const options = { clientSecret };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="checkout" className={isMobile ? 'pt-4' : 'pt-24'}>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
