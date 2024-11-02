/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-10-29 17:13:13
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-10-31 02:08:08
 * @FilePath: /lulab_website_next_js/app/api/auth/[...nextauth]/route.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers