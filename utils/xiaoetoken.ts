/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-06 23:08:21
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-07 03:20:27
 * @FilePath: /lulab_website_next_js-1/utils/xiaoetoken.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


// utils/xiaoetoken.ts

export async function getXiaoeToken() {
    const now = Date.now();

    const { NEXT_PUBLIC_APP_ID, NEXT_PUBLIC_CLIENT_ID, NEXT_PUBLIC_SECRET_KEY } = process.env;

    // 确保环境变量被设置
    if (!NEXT_PUBLIC_APP_ID || !NEXT_PUBLIC_CLIENT_ID || !NEXT_PUBLIC_SECRET_KEY) {
        throw new Error("Missing environment variables");
    }

    // 使用 URLSearchParams 构造参数
    const params = new URLSearchParams({
        app_id: NEXT_PUBLIC_APP_ID,
        client_id: NEXT_PUBLIC_CLIENT_ID,
        secret_key: NEXT_PUBLIC_SECRET_KEY,
        grant_type: "client_credential",
    });

    const apiUrl = "https://api.xiaoe-tech.com/token";

    try {
        const response = await fetch(`${apiUrl}?${params.toString()}`, {
            method: "GET",
            // cache: 'force-cache',
            next: { revalidate: 7000, tags: ["xiaoe-token"] }
        });

        if (!response.ok) {
            console.error("Failed to fetch Xiaoe access token");
            throw new Error("Failed to fetch Xiaoe access token");
        }

        const data = await response.json();
        // console.log("Xiaoe Token Response:", data);

        return data;
    } catch (error) {
        console.error("Error fetching Xiaoe token:", error instanceof Error ? error.message : error);
        return { msg: error }
    }
}