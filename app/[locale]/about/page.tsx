"use client";
import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslations } from 'next-intl';
import MainVideoPlayer from '@/components/videoplayer/MainVideoPlayer';
import SortVideoPlayer from '@/components/sortvideoplayer/SortVideoPlayer';

const VideoContainer = styled('div')({
  width: '100%',
  height: '100%',
  paddingBottom: '10.25%', // 16:9 aspect ratio
  position: 'relative',
  marginBottom: '2rem',
});

const BackgroundContainer = styled('div')({
  width: '100%',
  height: '0',
  position: 'relative',
});

export default function About() {
  const theme = useTheme();
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const t = useTranslations('AboutPage');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box>
      {isClient && (
        <>
          {/* Video */}
          <VideoContainer>
            {/* 使用在线视频（酷播云） */}
            <MainVideoPlayer isMobile={isMobile}/> 
          </VideoContainer>

          <Container maxWidth="lg" className="py-12">
            {/* Title */}
            <Typography
              variant={isMobile ? "h5" : "h3"}
              className="text-center mb-26"
              style={{ paddingTop: isMobile ? "20px" : "150px" }}
            >
              {t('about')}
            </Typography>

            {/* Mission, Vision, Goals */}
            <Grid container spacing={6} justifyContent="center" className="mb-20" style={{ paddingTop: isMobile ? "40px" : "80px" }}>
              {[t('mission'), t('vision'), t('goals')].map((title, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card className="h-full shadow-lg" sx={{ borderRadius: '16px' }} style={{ height: isMobile ? 'auto' : "600px" }}>
                    <CardContent className={`flex ${isMobile ? 'flex-row' : 'flex-col'} justify-between p-6`}>
                      <Box className={isMobile ? 'w-1/3 mr-4' : 'w-full'}>
                        <img
                          src={`/images/edu0${index + 1}.png`}
                          className="w-full h-full object-cover"
                          alt={title}
                        />
                      </Box>
                      <Box className={isMobile ? 'w-2/3' : 'w-full'}>
                        <Typography variant={isMobile ? "h6" : "h4"} className="text-center mb-4 font-bold" style={{ paddingTop: isMobile ? "1px" : "5px" }}>
                          {title}
                        </Typography>
                        <Typography variant={isMobile ? "body1" : "h6"} style={{ paddingTop: isMobile ? "10px" : "20px", color: "GrayText" }}>
                          {index === 0 && t('mission_info')}
                          {index === 1 && t('vision_info')}
                          {index === 2 && t('goals_info')}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Educational Philosophy */}
            <Box className="mb-20" style={{ paddingBottom: isMobile ? "50px" : "100px" }}>
              <Typography
                variant={isMobile ? "h5" : "h3"}
                className="text-center mb-8 font-bold"
                style={{ paddingTop: isMobile ? "50px" : "100px", paddingBottom: isMobile ? "40px" : "80px" }}
              >
                {t('edu')}
              </Typography>
              <Card className="h-full shadow-lg" sx={{ borderRadius: '16px' }}>
                <CardContent className="h-full flex flex-col justify-between p-6">
                  <Typography variant={isMobile ? "body1" : "h6"} className="text-lg">
                    {t('edu_methods')}
                    <ol className="list-decimal pl-8 mt-4 space-y-2">
                      <li> {t('edu_methods_1st')}</li>
                      <li> {t('edu_methods_2nd')}</li>
                    </ol>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            {/* Origin */}
            <Box className="mb-20" style={{ paddingTop: isMobile ? "20px" : "100px" }}>
              <Typography
                variant={isMobile ? "h5" : "h3"}
                className="text-center mb-8 font-bold"
                style={{ paddingBottom: isMobile ? "20px" : "40px" }}
              >
                {t('lulab_origin')}
              </Typography>
              <Grid container spacing={6} alignItems="center" direction={isMobile ? "column" : "row"}>
                <Grid item xs={12} md={6}>
                  <Card className="h-full shadow-lg" sx={{ borderRadius: '16px' }} style={{ height: "300px", lineHeight: "300px", padding: "20px" }}>
                    <CardContent className="h-full flex flex-col justify-between p-6">
                      <Typography variant={isMobile ? "body1" : "h6"} className="text-lg">
                        {t('lulab_origin_info')}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  {/** bg-gray-200 */}
                  <Box className="w-full h-full rounded-lg flex items-center justify-center">
                    <Typography style={{ paddingTop: isMobile? '50px' : '0px', paddingLeft: isMobile? '50px' : '0px', paddingRight: isMobile? '50px' : '0px'}}>
                      {/* 使用在线视频（酷播云） */}
                      <SortVideoPlayer isMobile={isMobile} />
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* Founder Introduction */}
            <Box className="mb-20" style={{ paddingTop: isMobile ? "50px" : "100px", paddingBottom: isMobile ? "10px" : "80px" }}>
              <Typography
                variant={isMobile ? "h5" : "h3"}
                className="text-center mb-8 font-bold"
              >
                {t('lulab_founder')}
              </Typography>
              <Grid container spacing={6} alignItems="center" style={{ paddingTop: isMobile ? "25px" : "50px" }} direction={isMobile ? "column" : "row"}>
                <Grid item xs={12} md={4}>
                  <Box className="w-full h-full rounded-lg flex items-center justify-center">
                    <img
                      src="/images/LuXiangqian05.png"
                      className="w-full h-full object-cover"
                      style={{ width: isMobile ? "200px" : "500px" }}
                      alt="Lu Xiangqian"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Card className="h-full shadow-lg" sx={{ borderRadius: '16px' }}>
                    <CardContent className="h-full flex flex-col justify-between p-6">
                      <Typography variant={isMobile ? "body1" : "h6"} className="text-lg space-y-4">
                        <p>{t('lulab_founder_info_1st')}</p>
                        <p>{t('lulab_founder_info_2nd')}</p>
                        <p>{t('lulab_founder_info_3rd')}</p>
                        <p>{t('lulab_founder_info_4th')}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            {/* Professor's Message */}
            <Box className="mb-20">
              {/* Circular Image */}
              <Box
                className="rounded-full overflow-hidden mx-auto mb-10"
                style={{ width: isMobile ? "100px" : "200px", height: isMobile ? "100px" : "200px" }}
              >
                <img
                  src="/images/lu_avatar.jpeg"
                  className="w-full h-full object-cover"
                  alt="Lu Xiangqian Avatar"
                />
              </Box>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                className="text-center mb-8 font-bold"
                style={{ paddingBottom: "30px" }}
              >
                {t('professors_msg')}
              </Typography>
              <Typography variant={isMobile ? "body1" : "h5"} className="text-center text-xl italic" style={{ paddingTop: "10px", color: "gray" }}>
                {t('professors_msg_info')}
              </Typography>
            </Box>
            {/* Additional Information */}
            <Grid container spacing={6} className="mb-20" style={{ paddingBottom: "180px" }}>
              {[
                { title: t('additional_1st'), link: 'mp.weixin.qq.com/s/ihmL2znR1r0DyVOY8QcffA' },
                { title: t('additional_2nd'), link: 'mp.weixin.qq.com/s/BDxkfaO3vE1oNkIKy5yLzA' },
                { title: t('additional_3rd'), link: 'mp.weixin.qq.com/s/B0_A8XNqiA_gkEdiS1WK9A' }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card className="h-full shadow-lg" sx={{ borderRadius: '16px' }}>
                    <CardContent className="h-full flex flex-col justify-between p-6">
                      <Typography variant={isMobile ? "body1" : "h6"} className="mb-4 font-bold" style={{ color: "black" }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" style={{ paddingTop: "10px" }}>
                        <a href={`https://${item.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {t('read_more')}
                        </a>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          {/* Background Image Placeholder */}
          <BackgroundContainer>
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                position: 'fixed',
                bottom: 0,
                left: 0,
                zIndex: -1,
                backgroundColor: 'gray',
              }}
              className="rounded-lg flex items-center justify-center"
            >
              <img
                src={isMobile ? '/images/bg02.png' : '/images/bg01.png'}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
                alt="background"
              />
            </Box>
          </BackgroundContainer>
        </>
      )}
    </Box>
  );
}