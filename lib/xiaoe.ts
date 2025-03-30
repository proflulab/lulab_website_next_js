/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-06 23:08:21
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2025-03-26 16:26:46
 * @FilePath: /lulab_website_next_js/lib/xiaoe.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */


import { revalidateTag } from "next/cache";


const BASE_URL = "https://api.xiaoe-tech.com/"
const maxRetries = 3; // 设置最大重试次数
const { XIAOE_APP_ID, XIAOE_CLIENT_ID, XIAOE_SECRET_KEY } = process.env;


export async function getToken() {

    // 确保环境变量被设置
    if (!XIAOE_APP_ID || !XIAOE_CLIENT_ID || !XIAOE_SECRET_KEY) {
        throw new Error("Missing environment variables");
    }

    // 使用 URLSearchParams 构造参数
    const params = new URLSearchParams({
        app_id: XIAOE_APP_ID,
        client_id: XIAOE_CLIENT_ID,
        secret_key: XIAOE_SECRET_KEY,
        grant_type: "client_credential",
    });

    const end_url = "token"

    try {
        const response = await fetch(`${BASE_URL}${end_url}?${params.toString()}`, {
            method: "GET",
            // cache: 'force-cache',
            next: { revalidate: 7000, tags: ["xiaoe-token"] }
        });

        if (!response.ok) {
            console.error("Failed to fetch Xiaoe access token");
            throw new Error("Failed to fetch Xiaoe access token");
        }

        const data = await response.json();
        // console.log("Xiaoe Token Response:",data.code);

        return data;
    } catch (error) {
        console.error("Error fetching Xiaoe token:", error instanceof Error ? error.message : error);
        return { msg: error }
    }
}

export async function goodsDetail(resources: object[], retryCount = 0) {

    const end_url = "xe.goods.detail.get/4.0.0"
    const tokenData = await getToken();

    if (tokenData.code === 2023) {
        return null;
    }

    try {
        const response = await fetch(BASE_URL + end_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_token: tokenData.data.access_token,
                resources
            }),
            next: { revalidate: 24 * 60 * 60, tags: ["xiaoe-goodDetail"] }
        });

        const data = await response.json();

        if (!response.ok || data.code === 2008) {
            if (retryCount < maxRetries) {
                revalidateTag("xiaoe-token");
                console.warn(`Retrying goodsDetail due to error code 2008... Attempt ${retryCount + 1}`);
                return goodsDetail(resources, retryCount + 1); // 递归调用，重试
            } else {
                throw new Error("Failed to fetch goods detail after multiple attempts.");
            }
        }

        return data;

    } catch (error) {
        console.error("Error fetching goods detail:", error);
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
}