/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-07-28 22:22:30
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-07-29 11:50:10
 * @FilePath: \lulab_website_next_js\pages\api\checkPhone.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import supabase from "../api/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone } = req.body;

    try {
      const { data, error } = await supabase
        .from("lulab_db")
        .select("user_phone")
        .eq("user_phone", phone);

      console.log(data);
      console.log(phone);

      if (error) {
        throw error;
      }

      if (data.length > 0) {
        // Phone number exists
        return res.status(200).json({ exists: true });
      } else {
        // Phone number does not exist
        return res.status(200).json({ exists: false });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
