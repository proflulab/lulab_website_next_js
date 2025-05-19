import { NextResponse } from 'next/server';

// 将 GET 方法更改为 POST
export async function POST() {
    const cozeToken = process.env.COZE_TOKEN;

    if (!cozeToken) {
        // 在生产环境中，您可能不想暴露错误细节，可以返回一个通用错误
        console.error("COZE_TOKEN is not set in server environment variables.");
        return NextResponse.json({ error: 'Coze token not configured' }, { status: 500 });
    }

    // 返回 token。注意：虽然通过API返回，但仍然需要确保只有授权的客户端可以访问此API，
    // 或者接受 token 暴露给任何可以访问此API的客户端。
    // 对于大多数客户端集成的聊天机器人SDK，token需要在客户端使用，
    // 因此通过API提供是常见的做法，但请了解其安全含义。
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