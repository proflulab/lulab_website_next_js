import supabase from "../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, otp, password } = req.body;

    let data, error;

    console.log("Request body:", req.body);
    console.log("sign in:", email, otp);

    if (email && password) {
      // 使用邮箱和密码登录
      ({ data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      }));
      if (error) {
        console.log("Error signing in with password:", error);
        return res.status(400).json({ error: error.message });
      }
      console.log(
        "User signed in successfully with email and password:",
        email
      );
      return res.status(200).json({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        user: data.user, // 返回用户信息
      });
    } else if (email && !otp) {
      // 发送验证码
      ({ data, error } = await supabase.auth.signInWithOtp({ email }));
      if (error) {
        console.log("Error sending OTP:", error);
        return res.status(400).json({ error: error.message });
      }
      console.log("Verification code sent successfully to:", email);
      return res
        .status(200)
        .json({ message: "Verification code sent successfully" });
    } else if (email && otp) {
      // 验证验证码
      ({ data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      }));
      if (error) {
        console.log("Error verifying OTP:", error);
        return res.status(400).json({ error: error.message });
      }

      console.log("OTP verified successfully, session:", data.session);
      return res.status(200).json({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        user: data.user, // 返回用户信息
      });
    } else {
      return res
        .status(400)
        .json({ error: "Email and password or OTP are required" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
