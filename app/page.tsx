/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import App from "./title/page";
import End from "./title/end";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";
import { Image } from "@nextui-org/react";
import { Carousel } from "./Carousel";

import {
  Event as OverviewIcon,
  School as EduIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

let indentLevel = 2;
let spaces = ' '.repeat(indentLevel * 4);   // 空格
let warp = "\r";     // 换行


let infomation = `
${spaces}${spaces}In 1994, Professor Lu Xiangqian established a laboratory to test his teaching methods and was convinced 
${warp}that the Internet would change the world. Students are divided into different clubs according to age and 
nterests, respecting students' interests and hobbies and providing space for their growth.`;

const imageUrls = [
  "/image2.jpg",
  "/image1.jpg",
  "/xueyuan.jpg"
];

const Home: React.FC = () => {
  // const [images, setImages] = useState<string[]>([]);
  // const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // useEffect(() => {
  //   const imageUrls = ["image3.jpg", "xueyuan.jpg", "image1.jpg"];
  //   setImages(imageUrls);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [images]);

  // const showNextImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const showPreviousImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };
  // const [windowWidth, setWindowWidth] = useState<number>(0);

  // const [isMobile, setIsMobile] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     setIsMobile(width <= 768);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <App />
      <Grid container justifyContent="center" spacing={2} style={{ background: "white" }}>
        <Box sx={{ my: 2 }}>
          {/* Hero Section */}
          <Card sx={{ display: 'flex', mb: 4 }}>
            <CardMedia
              component="div"
              sx={{ position: 'relative', width: '100%', height: 650}}
            >
            <img src="/background03.png" style={{ width: '100%', height: '100%', objectFit: "cover"}} />
            
            </CardMedia>
            
            {/* <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h5" component="div" gutterBottom>
                We provide the best project practice environment and cultivate talents with strong comprehensive abilities.
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                variant="contained" 
                fullWidth 
                sx={{ 
                  bgcolor: 'teal', 
                  '&:hover': { bgcolor: 'teal.dark' } 
                }}
              >
                Explore our courses
              </Button>
            </CardActions>
          </Box> */}
          </Card>

          {/* Main Content */}
          <Grid container justifyContent="center" spacing={2} style={{ paddingTop:'30px', paddingBottom:'50px' }}>
            <Typography variant="h3" component="h1" gutterBottom style={{ fontWeight: 'bold', color: 'black' }}>
              Welcome to Lu Lab
            </Typography>
            <Typography variant="h4" paragraph style={{ paddingLeft:'400px', paddingBottom:'20px' , paddingRight:'400px',color: 'black', fontSize: '18px' }}>
                {infomation}
              </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'darkred',
                '&:hover': { bgcolor: 'red.dark' }
              }}
              href="/About"
            >
              More about Lulab
            </Button>
          </Grid>

          {/* Image Section */}
          <Carousel imageUrls={imageUrls} />
        </Box>
      </Grid>
      <End />
    </>
  );
};

export default Home;
