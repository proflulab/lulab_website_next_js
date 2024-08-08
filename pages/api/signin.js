/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-07-27 07:39:17
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-08-08 10:50:09
 * @FilePath: \lulab_website_next_js\pages\api\signin.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import supabase from "../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone, otp } = req.body;

    let data, error;

    console.log("Request body:", req.body);
    console.log("sign in:", phone, otp);

    if (phone && !otp) {
      // 发送验证码
      ({ data, error } = await supabase.auth.signInWithOtp({ phone }));
      if (error) {
        console.log(error, phone);
        return res.status(400).json({ error: error.message });
      }
      console.log("Verification code sent successfully to:", phone);
      return res
        .status(200)
        .json({ message: "Verification code sent successfully" });
    } else if (phone && otp) {
      // 验证验证码
      ({ data, error } = await supabase.auth.verifyOtp({
        phone,
        token: otp,
        type: "sms",
      }));
      if (error) {
        return res.status(400).json({ error: error.message });
      }
      console.log(data.session.access_token);
      return res.status(200).json({ data });
    } else {
      return res.status(400).json({ error: "Phone and password are required" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
