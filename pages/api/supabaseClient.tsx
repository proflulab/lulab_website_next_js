/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-07 04:57:43
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-08 01:07:35
 * @FilePath: /lulab_website_next_js-1/pages/api/supabaseClient.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
