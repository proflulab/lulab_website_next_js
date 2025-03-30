/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-23 22:54:46
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-23 22:59:50
 * @FilePath: /lulab_website_next_js/lib/stripe.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */

import 'server-only'

import Stripe from 'stripe'

export type { Stripe } from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-12-18.acacia',
});