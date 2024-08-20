// pages/api/getProductDetails.js
import axios from "axios";
import getAccessToken from "../../lib/tokenManager";

export default async function handler(req, res) {
  console.log("req: ", req);
  console.log("res: ", res);

  try {
    const accessToken = await getAccessToken();

    const response = await axios.post(
      "https://api.xiaoe-tech.com/xe.goods.detail.get/4.0.0",
      {
        access_token: accessToken,
        resources: [
          {
            type: 5,
            ids: ["p_62692d0ee4b09dda126125b5"],
          },
        ],
        body: "stock,sku,attr",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.code === 0) {
      return res.status(200).json(response.data.data);
    } else {
      return res.status(400).json({ error: response.data.msg });
    }
  } catch (error) {
    console.error("Error fetching product details: ", error);
    return res.status(500).json({ error: "Failed to fetch product details" });
  }
}
