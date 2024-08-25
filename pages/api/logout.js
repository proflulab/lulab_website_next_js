import supabase from "../lib/supabaseClient";

export default async function logout(req, res) {
  if (req.method === "POST") {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ error: "Error during logout" });
    } else {
      console.log("Logout success");
      res.status(200).json({ message: "Logout successful" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
