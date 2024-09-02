// /* eslint-disable @next/next/no-img-element */

// "use client";
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import App from "./title/page";
// import End from "./title/end";
// import { Grid, Typography } from "@mui/material";
// import {
//   Event as OverviewIcon,
//   School as EduIcon,
//   Person as PersonIcon,
// } from "@mui/icons-material";

// const Home: React.FC = () => {
//   const [images, setImages] = useState<string[]>([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

//   useEffect(() => {
//     const imageUrls = ["image3.jpg", "xueyuan.jpg", "image1.jpg"];
//     setImages(imageUrls);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images]);

//   const showNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const showPreviousImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };
//   const [windowWidth, setWindowWidth] = useState<number>(0);

//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width <= 768);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <App />

//       <div>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             background: "white",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               position: "relative",
//               width: "100vw",
//               height: "48vw",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 left: "5%",
//                 right: "5%",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 zIndex: 2,
//               }}
//             >
//               <button
//                 onClick={showPreviousImage}
//                 style={{ color: "green", fontWeight: "bold", fontSize: "28px" }}
//               >
//                 <FontAwesomeIcon icon={faChevronLeft} />
//               </button>
//               <button
//                 onClick={showNextImage}
//                 style={{ color: "green", fontWeight: "bold", fontSize: "28px" }}
//               >
//                 <FontAwesomeIcon icon={faChevronRight} />
//               </button>
//             </div>

//             <div
//               style={{
//                 position: "absolute",
//                 top: "90%",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 backgroundColor: "#333333",
//                 color: "#fff",
//                 padding: "15px",
//                 zIndex: 1,
//                 width: isMobile ? "90%" : "60%",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: isMobile ? "15px" : "24px",
//                   textAlign: "center",
//                 }}
//               >
//                 Gathering the world&apos;s elite masters to play in a group.
//               </p>
//             </div>

//             {images.length > 0 && (
//               // eslint-disable-next-line @next/next/no-img-element
//               <img
//                 src={images[currentImageIndex]}
//                 alt={`Image ${currentImageIndex + 1}`}
//                 style={{
//                   width: "100%",
//                   height: isMobile ? "100%" : "95%",
//                   objectFit: "cover",
//                   zIndex: 0,
//                 }}
//               />
//             )}
//           </div>

//           <div style={{ margin: "20px" }}>
//             <Typography
//               variant="h2"
//               sx={{
//                 fontSize: { xs: "35px", md: "60px" },
//                 color: "black",
//                 marginTop: "40px",
//                 marginBottom: "40px",
//                 textAlign: "center",
//                 fontWeight: "bold",
//               }}
//             >
//               Welcome to Lu Lab
//             </Typography>

//             <Grid container spacing={6}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <div
//                   style={{
//                     display: "flex",

//                     marginBottom: "10px",
//                   }}
//                 >
//                   <OverviewIcon fontSize="large" style={{ color: "#4CAF50" }} />
//                   <div>
//                     <Typography
//                       variant="h3"
//                       style={{
//                         fontWeight: "600",
//                         color: "black",
//                         fontSize: "28px",
//                       }}
//                     >
//                       Overview
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       style={{ fontWeight: "400", color: "black" }}
//                     >
//                       In 1994, Professor Lu Xiangqian established a laboratory
//                       to test his teaching methods, convinced that the Internet
//                       would change the world.
//                     </Typography>
//                   </div>
//                 </div>
//               </Grid>

//               <Grid item xs={12} sm={6} md={4}>
//                 <div
//                   style={{
//                     display: "flex",

//                     marginBottom: "10px",
//                   }}
//                 >
//                   <EduIcon fontSize="large" style={{ color: "#4CAF50" }} />
//                   <div>
//                     <Typography
//                       variant="h3"
//                       style={{
//                         fontWeight: "600",
//                         color: "black",
//                         fontSize: "28px",
//                       }}
//                     >
//                       Educational concept
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       style={{ fontWeight: "400", color: "black" }}
//                     >
//                       It is better to learn theory than to learn cases; It is
//                       better to learn cases than to make cases; It is better to
//                       make a case than to play a case; One person is not as good
//                       as several; A few people to play is not as good as
//                       gathering the world&apos;s elite masters to play in a
//                       group.
//                     </Typography>
//                   </div>
//                 </div>
//               </Grid>

//               <Grid item xs={12} sm={6} md={4}>
//                 <div
//                   style={{
//                     display: "flex",

//                     marginBottom: "10px",
//                   }}
//                 >
//                   <PersonIcon fontSize="large" style={{ color: "#4CAF50" }} />
//                   <div>
//                     <Typography
//                       variant="h3"
//                       style={{
//                         fontWeight: "600",
//                         color: "black",
//                         fontSize: "28px",
//                       }}
//                     >
//                       Personalized learning
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       style={{ fontWeight: "400", color: "black" }}
//                     >
//                       Students are divided into different clubs according to
//                       their age and interests. Respect students&apos; hobbies
//                       and provide development space for students&apos; growth.
//                     </Typography>
//                   </div>
//                 </div>
//               </Grid>
//             </Grid>
//           </div>
//         </div>
//         <End />
//       </div>
//     </>
//   );
// };

// export default Home;
"use client";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import App from "../app/title/page";

const Course = () => {
  const [accessToken, setAccessToken] = useState(null); // Xiaoe access_token
  const [goodsData, setGoodsData] = useState(null); // 商品数据
  const [apiKey, setApiKey] = useState(null); // Stripe API Key
  const [buyButtonId, setBuyButtonId] = useState(null); // Stripe Buy Button ID
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 错误信息

  // 获取 Xiaoe access_token 的函数
  const getXiaoeToken = async () => {
    try {
      const response = await fetch("/api/getXiaoeToken", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Xiaoe access token");
      }

      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error("Error fetching Xiaoe token:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 获取商品数据的函数
  const getGoodsData = async () => {
    if (!accessToken) return;

    try {
      const response = await fetch("/api/getXiaoeGoods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resources: [
            {
              type: 21,
              ids: ["g_665f2719e0bcd_mrMARvTL54"],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch goods data");
      }

      const data = await response.json();
      setGoodsData(data.data[0]); // 假设返回的数组第一项是我们需要的数据
    } catch (error) {
      console.error("Error fetching goods data:", error.message);
      setError(error.message);
    }
  };

  // 获取 Stripe API Key 和 Buy Button ID 的函数
  const getApiKey = async () => {
    try {
      const response = await fetch("/api/getapikey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_name: "stripe API Key" }),
      });
      const result = await response.json();
      if (response.ok) {
        setApiKey(result.api_key);
        setBuyButtonId(result.buy_button_id);
      } else {
        throw new Error(result.error || "Error fetching API key.");
      }
    } catch (error) {
      console.error("Error fetching API key:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getXiaoeToken(); // 页面加载时请求 Xiaoe access_token
    getApiKey(); // 获取 Stripe API Key 和 Buy Button ID

    // 动态添加 Stripe Buy Button 脚本
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (accessToken) {
      getGoodsData(); // 获取商品数据
    }
  }, [accessToken]);

  return (
    <>
      <App />
      <Grid
        sx={{
          backgroundColor: "white",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        {loading ? (
          <Typography
            variant="body1"
            sx={{ color: "black", textAlign: "center" }}
          >
            Loading...
          </Typography>
        ) : error ? (
          <Typography
            variant="body1"
            sx={{ color: "red", textAlign: "center" }}
          >
            Error: {error}
          </Typography>
        ) : goodsData ? (
          <Card sx={{ maxWidth: 600, margin: "20px", textAlign: "center" }}>
            <CardMedia
              component="img"
              height="400"
              image={goodsData.goods_img[0]} // 商品图片
              alt={goodsData.goods_name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {goodsData.goods_name} {/* 商品名称 */}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginTop: 2 }}
              >
                {goodsData.goods_detail_text && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: goodsData.goods_detail_text, // 商品描述（HTML）
                    }}
                  />
                )}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Typography
            variant="body1"
            sx={{ color: "black", textAlign: "center" }}
          >
            No goods data available
          </Typography>
        )}
      </Grid>

      {/* 底部固定导航栏 */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 0",
          zIndex: 1000, // 确保在页面顶部
        }}
      >
        <stripe-buy-button
          buy-button-id="buy_btn_1PfCPSEmgDIszJrIncbXJvj4"
          publishable-key="pk_test_51OgaIMEmgDIszJrIVQpseWGGIsUJNLBa7o9pdwMxzzq3oS39E79hItBKN9GuUuSbBBxcwsxwPGUy7NBcbgqDCssZ005iAmw0YI"
        ></stripe-buy-button>
      </div>
    </>
  );
};

export default Course;
