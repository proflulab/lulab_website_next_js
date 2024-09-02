import supabase from "../api/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
        throw error; // 将错误抛出以进入 catch 块
      }

      if (data && data.length > 0) {
        // Phone number exists
        return res.status(200).json({ exists: true });
      } else {
        // Phone number does not exist
        return res.status(200).json({ exists: false });
      }
    } catch (error) {
      // 使用 instanceof Error 来检查 error 类型
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        // 如果 error 不是标准的 Error 对象，返回一个通用错误
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
