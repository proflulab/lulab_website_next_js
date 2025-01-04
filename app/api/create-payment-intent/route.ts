/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-04 06:44:40
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-01-04 19:14:18
 * @FilePath: /lulab_website_next_js/app/api/create-payment-intent/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(req: Request) {
  try {
    const { amount, metadata } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amount in cents
      currency: 'cny',
      payment_method_types: ['wechat_pay','alipay','card'],
      metadata: {
        ...metadata,
        course: '课程报名',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: amount,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    );
  }
}
