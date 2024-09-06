/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-07 00:58:59
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-07 03:03:48
 * @FilePath: /lulab_website_next_js-1/app/api/xiaoe/good/route.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import { revalidateTag } from "next/cache";
import { getXiaoeToken } from "../../../../utils/xiaoetoken";

const XIAOE_API_URL = "https://api.xiaoe-tech.com/xe.goods.detail.get/4.0.0";
const RESOURCE_TYPE = 21;
const RESOURCE_ID = "g_665f2719e0bcd_mrMARvTL54";

async function fetchGoodsDetail(accessToken: string) {
    const response = await fetch(XIAOE_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            access_token: accessToken,
            resources: [
                {
                    "type": RESOURCE_TYPE,
                    "ids": [RESOURCE_ID],
                },
            ],
        }),
        next: { revalidate: 24 * 60 * 60, tags: ["xiaoe-good"] }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch goods detail");
    }

    return response.json();
}

export async function GET(req: Request) {
    try {
        let tokenData = await getXiaoeToken();
        let data = await fetchGoodsDetail(tokenData.data.access_token);

        // 处理特定的错误码（例如 token 过期）
        if (data.code === 2008) {
            revalidateTag("xiaoe-token");
            tokenData = await getXiaoeToken();
            data = await fetchGoodsDetail(tokenData.data.access_token);
        }

        return Response.json(data);
    } catch (error) {
        // 更通用的错误处理方式
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        console.error("Error fetching good:", errorMessage);
        return Response.json({ message: "Internal server error" });
    }
}