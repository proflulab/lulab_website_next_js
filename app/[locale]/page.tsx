/*
 * @Author: 杨仕明 shiming.y@qq.com
 * @Date: 2024-09-10 01:59:14
 * @LastEditors: 杨仕明 shiming.y@qq.com
 * @LastEditTime: 2024-09-11 16:00:24
 * @FilePath: /lulab_website_next_js/app/[locale]/page.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */

"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { Box, useTheme, useMediaQuery, Typography, Card, CardContent } from '@mui/material';
import styles from './home.module.css'; // Import the CSS module
import { styled } from '@mui/system';
import { useTranslations } from 'next-intl';

const BackgroundContainer = styled('div')({
  width: '100%',
  height: '100%',
  position: 'relative',
});

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const t = useTranslations('HomePage');

  return (
    <>
      <Box>
        <Card
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            maxWidth: isMobile ? '90%' : '60%',
            width: '100%',
          }}
        >
          <CardContent>
            <Typography
              variant={isMobile ? "body2" : "h5"}
              component="div"
              style={{ color: 'white', whiteSpace: 'pre-line', textAlign: 'center' }}
            >
              {t('concept')}
            </Typography>
          </CardContent>
        </Card>
        <BackgroundContainer>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              zIndex: -1,
            }}
            className="flex items-center justify-center"
          >
            <img
              src={isMobile ? "/images/leadership02.jpg" : "/images/leadership.jpg"}
              alt="Leadership"
              className={isMobile ? styles.coverImage : styles.fullImage}  // 使用模块化的CSS类
            />
          </Box>
        </BackgroundContainer>

      </Box>
    </>
  );
};

export default Home;
