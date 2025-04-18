/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-01-05 17:10:51
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-31 02:50:03
 * @FilePath: /lulab_website_next_js/app/api/stripe/checkout_sessions/route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '../../../../lib/stripe'

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID, // 从环境变量读取价格ID
          quantity: 1,
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      metadata: {
        affiliate: body.channelCode,
      },
      consent_collection: {
        terms_of_service: 'required',
      },
      custom_text: {
        terms_of_service_acceptance: {
          message: `I agree to the [Terms of Service](${request.headers.get('origin')}/agreement.html)`,
        },
      },
      mode: 'payment',
      return_url: `${request.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    if (err instanceof Stripe.errors.StripeError) {
      return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({ message: 'Session ID is required' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details?.email,
      payment_intent: session.payment_intent,
    });
  } catch (err) {
    if (err instanceof Stripe.errors.StripeError) {
      return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
    }
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
