import { NextResponse } from 'next/server';

// 将 GET 方法更改为 POST
export async function POST() {
    const cozeToken = process.env.COZE_TOKEN;

    if (!cozeToken) {
        // 在生产环境中，您可能不想暴露错误细节，可以返回一个通用错误
        console.error("COZE_TOKEN is not set in server environment variables.");
        return NextResponse.json({ error: 'Coze token not configured' }, { status: 500 });
    }

    return NextResponse.json({ token: cozeToken });
}

// 可选：添加一个处理其他 HTTP 方法的函数，返回 Method Not Allowed
export function GET() {
    return new NextResponse('Method Not Allowed', { status: 405 });
}

export function PUT() {
    return new NextResponse('Method Not Allowed', { status: 405 });
}

export function DELETE() {
    return new NextResponse('Method Not Allowed', { status: 405 });
}