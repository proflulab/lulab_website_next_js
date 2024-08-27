import supabase from "../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, otp, password } = req.body;

    try {
      // 检查邮箱是否已经注册
      const response = await fetch(`${req.headers.origin}/api/checkEmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.exists) {
        return res
          .status(400)
          .json({ error: "Email address already registered" });
      }

      let data, error;

      console.log("Request body:", req.body);

      if (email && !otp) {
        // 注册用户
        ({ data, error } = await supabase.auth.signUp({ email, password }));

        if (error) {
          console.log("Error signing up user:", error);
          return res.status(400).json({ error: error.message });
        }

        // 发送邮箱验证码
        ({ data, error } = await supabase.auth.signInWithOtp({
          email,
          options: {
            shouldCreateUser: false, // 防止自动注册用户
          },
        }));

        if (error) {
          console.log("Error sending OTP:", error);
          return res.status(400).json({ error: error.message });
        }

        console.log("Verification code sent successfully to:", email);
        return res
          .status(200)
          .json({ message: "Verification code sent successfully" });
      } else if (email && otp) {
        // 验证邮箱验证码
        ({ data, error } = await supabase.auth.verifyOtp({
          email,
          token: otp,
          type: "email",
        }));

        if (error) {
          console.log("Error verifying OTP:", error);
          return res.status(400).json({ error: error.message });
        }

        console.log("Verify OTP result:", data);

        // 插入用户数据到 lulab_db 表
        if (data.session) {
          const { user } = data;
          if (user) {
            const { data: insertData, error: insertError } = await supabase
              .from("lulab_db")
              .insert([
                {
                  user_id: user.id,
                  user_email: user.email,
                  user_phone: null,
                  user_password: password,
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
            user: data.user,
          });
        } else {
          return res
            .status(400)
            .json({ error: "Failed to retrieve access token" });
        }
      } else {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
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
