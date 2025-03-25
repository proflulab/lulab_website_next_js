/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2025-03-23 23:41:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-23 23:42:06
 * @FilePath: /lulab_website_next_js/app/api/email/send/route.ts
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { customerEmail, orderId } = await request.json();

        // 配置邮件传输器
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // 发送邮件
        await transporter.sendMail({
            from: '"Lu Labs" <payment@lulabs.cn>',
            to: customerEmail,
            subject: '订单确认 - Lu Labs',
            html: `
        <h2>感谢您的订购！</h2>
        <p>您的订单已确认，订单编号：${orderId}</p>
        <p>如有任何问题，请随时联系我们的客服团队：orders@lulabs.org</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('发送邮件失败:', error);
        return NextResponse.json({ error: '发送邮件失败' }, { status: 500 });
    }
}