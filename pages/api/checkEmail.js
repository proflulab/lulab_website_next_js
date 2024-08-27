import supabase from "../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const { data, error } = await supabase
        .from("lulab_db")
        .select("user_email")
        .eq("user_email", email);

      console.log(data);
      console.log(email);

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
