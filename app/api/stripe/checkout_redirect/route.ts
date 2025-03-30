/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-31 03:00:00
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-31 03:14:43
 * @FilePath: /lulab_website_next_js/app/api/stripe/checkout_redirect/route.ts
 * @Description: Stripe重定向模式结账API
 */

import { NextResponse } from 'next/server';
import { headers } from 'next/headers'
import Stripe from 'stripe';
import { stripe } from '../../../../lib/stripe';

export async function POST(request: Request) {
    try {
        const headersList = await headers()
        const origin = headersList.get('origin')
        if (!origin) {
            return NextResponse.json({ message: 'Origin header is required' }, { status: 400 });
        }

        const body = await request.json();

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID, // 从环境变量读取价格ID
                    quantity: 1,
                },
            ],
            mode: 'payment',
            metadata: {
                affiliate: body.channelCode || 'default',
            },
            phone_number_collection: {
                enabled: true,
            },
            consent_collection: {
                terms_of_service: 'required',
            },
            custom_text: {
                terms_of_service_acceptance: {
                    message: `I agree to the [Terms of Service](${origin}/agreement.html)`,
                },
            },
            // 重定向模式特有配置
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        });

        if (!session.url) {
            return NextResponse.json({ message: 'Failed to create checkout session URL' }, { status: 500 });
        }
        return NextResponse.redirect(session.url as string, 303);

    } catch (err) {
        if (err instanceof Stripe.errors.StripeError) {
            return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
        }
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

