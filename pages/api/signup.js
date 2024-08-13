/*
 * @Author: caohanzhong 342292451@qq.com
 * @Date: 2024-07-27 15:39:13
 * @LastEditors: caohanzhong 342292451@qq.com
 * @LastEditTime: 2024-08-13 16:13:23
 * @FilePath: \lulab_website_next_jsd:\lulab_web_nextjs\dev\lulab_website_next_js\pages\api\signup.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import supabase from "../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone, otp } = req.body;

    try {
      // 先检查手机号是否已经注册
      const response = await fetch(`${req.headers.origin}/api/checkPhone`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const result = await response.json();

      if (result.exists) {
        console.log("Phone number already registered:", phone);
        return res
          .status(400)
          .json({ error: "Phone number already registered" });
      }

      let data, error;

      console.log("Request body:", req.body);
      console.log(phone, otp);

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

        console.log("Session:", data.session);

        // 确保用户数据插入逻辑在此处
        if (data.session) {
          // 在此处添加将用户数据存储到 lulab_db 表的逻辑
          const { user } = data;
          if (user) {
            const { data: insertData, error: insertError } = await supabase
              .from("lulab_db")
              .insert([
                {
                  user_id: user.id,
                  user_phone: phone,
                  user_email: user.email || null,
                  user_password: null, // 密码可以在用户注册或登录时处理
                  created_at: new Date().toISOString(),
                },
              ]);

            if (insertError) {
              console.error("Error inserting data:", insertError);
              return res.status(500).json({ error: "Error storing user data" });
            }

            console.log("User data inserted successfully:", insertData);
            return res.status(200).json({ insertData });
          }

          return res.status(200).json({
            access_token: data.session.access_token,
            refresh_token: data.session.refresh_token,
            user: data.user, // 也可以返回用户信息
          });
        } else {
          return res
            .status(400)
            .json({ error: "Failed to retrieve access token" });
        }
      } else {
        return res
          .status(400)
          .json({ error: "Phone and password are required" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
