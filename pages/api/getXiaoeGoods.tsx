// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET" && req.url?.includes("/pages/api/getXiaoeToken")) {
//     console.log("Handling getXiaoeToken request...");

//     const {
//       NEXT_PUBLIC_APP_ID,
//       NEXT_PUBLIC_CLIENT_ID,
//       NEXT_PUBLIC_SECRET_KEY,
//     } = process.env;

//     // Check if required environment variables are set
//     if (
//       !NEXT_PUBLIC_APP_ID ||
//       !NEXT_PUBLIC_CLIENT_ID ||
//       !NEXT_PUBLIC_SECRET_KEY
//     ) {
//       console.error("Missing environment variables");
//       return res.status(500).json({
//         message: "Internal server error: Missing environment variables",
//       });
//     }

//     const apiUrl = "https://api.xiaoe-tech.com/token";
//     const params = new URLSearchParams({
//       app_id: NEXT_PUBLIC_APP_ID,
//       client_id: NEXT_PUBLIC_CLIENT_ID,
//       secret_key: NEXT_PUBLIC_SECRET_KEY,
//       grant_type: "client_credential",
//     });

//     try {
//       const response = await fetch(`${apiUrl}?${params.toString()}`, {
//         method: "GET",
//       });

//       if (!response.ok) {
//         console.error("Failed to fetch Xiaoe access token");
//         throw new Error("Failed to fetch Xiaoe access token");
//       }

//       const data = await response.json();
//       console.log("Xiaoe Token Response:", data);
//       return res.status(200).json({ access_token: data.data.access_token });
//     } catch (error) {
//       console.error("Error fetching Xiaoe token:", (error as Error).message);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//   } else if (req.method === "POST" && req.url?.includes("/getXiaoeGoods")) {
//     console.log("Handling getXiaoeGoods request...");

//     const { resources } = req.body;
//     if (!resources) {
//       return res.status(400).json({ message: "Missing parameters" });
//     }

//     // 获取动态的 API 基础 URL
//     const protocol = req.headers["x-forwarded-proto"] || "http";
//     const host = req.headers.host;
//     const baseUrl = `${protocol}://${host}`;

//     // 获取 Xiaoe access_token 的函数
//     const getXiaoeToken = async () => {
//       try {
//         const response = await fetch(`${baseUrl}/api/getXiaoeToken`, {
//           method: "GET",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch Xiaoe access token");
//         }

//         const data = await response.json();
//         return data.access_token;
//       } catch (error) {
//         console.error("Error fetching Xiaoe token:", (error as Error).message);
//         throw error;
//       }
//     };

//     try {
//       const accessToken = await getXiaoeToken();
//       const apiUrl = "https://api.xiaoe-tech.com/xe.goods.detail.get/4.0.0";
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           access_token: accessToken,
//           resources,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch goods data");
//       }

//       const data = await response.json();
//       return res.status(200).json(data);
//     } catch (error) {
//       console.error("Error fetching goods data:", (error as Error).message);
//       return res.status(500).json({ message: "Internal server error" });
//     }
//   } else {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
// }
