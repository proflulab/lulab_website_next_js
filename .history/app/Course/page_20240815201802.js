"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import App from "../title/page";
import End from "../title/end";

// pages/api/getProductDetails.js
import axios from "axios";
import getAccessToken from "../../lib/tokenManager";

export default async function handler(req, res) {
  try {
    const accessToken = await getAccessToken();

    // 调用商品详情接口
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
      res.status(200).json(response.data.data);
    } else {
      res.status(400).json({ error: response.data.msg });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product details" });
  }
}
