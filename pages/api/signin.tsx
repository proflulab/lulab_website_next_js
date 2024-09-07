import { NextApiRequest, NextApiResponse } from "next";
import supabase from "../api/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

      // 安全检查 data.session 是否存在
      if (data.session) {
        console.log(data.session);
        return res.status(200).json({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
          user: data.user, // 也可以返回用户信息
        });
      } else {
        return res.status(400).json({ error: "Session not found" });
      }
    } else {
      return res.status(400).json({ error: "Phone and OTP are required" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
