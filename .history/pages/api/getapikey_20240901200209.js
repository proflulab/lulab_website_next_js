import supabase from "../api/supabaseClient";

export default async function getKey(req, res) {
  if (req.method === "POST") {
    const { service_name } = req.body;
    const { data, error } = await supabase
      .from("third_party_keys")
      .select("api_key, buy_button_id")
      .eq("service_name", service_name)
      .single();

    if (error) {
      console.error("Error fetching key:", error);
      res.status(500).json({ error: "Error fetching key" });
    } else {
      console.log("Fetched key:", data);
      res.status(200).json(data);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
