// "use client";
// import { Grid, Typography, useMediaQuery } from "@mui/material";
// import React, { useEffect } from "react";
// import App from "../title/page";
// import End from "../title/end";

// const Course = () => {
//   useEffect(() => {
//     // 动态添加 Stripe Buy Button 脚本
//     const script = document.createElement("script");
//     script.src = "https://js.stripe.com/v3/buy-button.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       // 在组件卸载时移除脚本
//       document.body.removeChild(script);
//     };
//   }, []); // 依赖项为空数组表示只在组件加载时运行一次

//   const isSmallerScreen = useMediaQuery("(max-width: 600px)");

//   return (
//     <>
//       <App />
//       <Grid
//         sx={{
//           backgroundColor: "white",
//           minHeight: "500px",
//           display: "flex",
//           flexDirection: isSmallerScreen ? "column" : "row",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {isSmallerScreen ? (
//           <>
//             <Grid item xs={12} md={4}>
//               {/* Stripe Buy Button code */}
//               <stripe-buy-button
//                 buy-button-id="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
//                 publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
//               ></stripe-buy-button>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "black",
//                   textAlign: "center",
//                   fontSize: { xs: "16px", md: "20px" },
//                 }}
//               >
//                 Tsinghua Professor Lu Xiangqian <br />
//                 Family Education & Career Development planning <br />
//                 <span style={{ color: "green" }}>
//                   Includes 1 to 1 consultation and Q&A
//                 </span>
//                 <br />
//                 Train children into <br />
//                 Stanford Berkeley <br />
//                 Instruct multiple participants to join <br />
//                 Or start a unicorn company
//               </Typography>
//             </Grid>
//           </>
//         ) : (
//           <>
//             <Grid item xs={12} md={4}>
//               {/* Stripe Buy Button code */}
//               <stripe-buy-button
//                 buy-button-id="buy_btn_1OjCnoEmgDIszJrI1w8Hs6zU"
//                 publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
//               ></stripe-buy-button>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "black",
//                   textAlign: "center",
//                   fontSize: { xs: "16px", md: "20px" },
//                 }}
//               >
//                 Tsinghua Professor Lu Xiangqian <br />
//                 Family Education & Career Development planning <br />
//                 <span style={{ color: "green" }}>
//                   Includes 1 to 1 consultation and Q&A
//                 </span>
//                 <br />
//                 Train children into <br />
//                 Stanford Berkeley <br />
//                 Instruct multiple participants to join <br />
//                 Or start a unicorn company
//               </Typography>
//             </Grid>
//           </>
//         )}
//       </Grid>
//       <End />
//     </>
//   );
// };

// export default Course;
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
