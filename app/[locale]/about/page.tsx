"use client";
import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const VideoContainer = styled('div')({
  width: '100%',
  height: '100%',
  paddingBottom: '56.25%', // 16:9 aspect ratio
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box>
      {isClient && (
        <>
          {/* Video */}
          <VideoContainer>
            {/* 使用本地视频 */}
            {/* <video width="100%" height="auto" autoPlay muted loop controls>
              <source src="/video/aboutLuLab.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            {/* 使用在线视频（酷播云） */}
            <iframe
              style={{ width: "100%", height: "100%", border: "none" , "position": "absolute"}}
              allowFullScreen
              src={'http://go.plvideo.cn/front/video/preview?vid=d309ba6b1c4159b4050b549d24cd7967_d'}
              title="Embedded Video Player"
            />
          </VideoContainer>

          <Container maxWidth="lg" className="py-12">
            {/* Title */}
            <Typography
              variant={isMobile ? "h5" : "h3"}
              className="text-center mb-26"
              style={{ paddingTop: isMobile ? "20px" : "150px" }}
            >
              关于陆向谦实验室
            </Typography>

            {/* Mission, Vision, Goals */}
            <Grid container spacing={6} justifyContent="center" className="mb-20" style={{ paddingTop: isMobile ? "40px" : "80px" }}>
              {['使命', '愿景', '培养目标'].map((title, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card className="h-full shadow-lg" style={{ height: isMobile ? 'auto' : "600px" }}>
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
                        <Typography variant={isMobile ? "body1" : "h6"} className="text-center" style={{ paddingTop: isMobile ? "10px" : "20px", color: "GrayText" }}>
                          {index === 0 && '帮助陆向谦实验室的同学们实现梦想'}
                          {index === 1 && '做成网上斯坦福大学. 把斯坦福送到寻常百姓家'}
                          {index === 2 && '培养同学们成为AI时代的超级个体'}
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
                教育理念
              </Typography>
              <Card className="h-full shadow-lg">
                <CardContent className="h-full flex flex-col justify-between p-6">
                  <Typography variant={isMobile ? "body1" : "h6"} className="text-lg">
                    1994年，坚信互联网会颠覆整个世界，陆向谦教授创建实验室来实践他的教育方法：
                    <ol className="list-decimal pl-8 mt-4 space-y-2">
                      <li>非常规自我实现</li>
                      <li>学理论不如学案例；学案例不如做案例；做案例不如玩案例；一人玩不如几人玩；几人玩不如聚天下英才名师组团玩。</li>
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
                陆向谦实验室何来
              </Typography>
              <Grid container spacing={6} alignItems="center" direction={isMobile ? "column" : "row"}>
                <Grid item xs={12} md={6}>
                  <Card className="h-full shadow-lg" style={{ height: "200px" }}>
                    <CardContent className="h-full flex flex-col justify-between p-6">
                      <Typography variant={isMobile ? "body1" : "h6"} className="text-lg">
                        陆向谦实验室（硅谷Lulab）是源于清华大学，正式成立注册在美国硅谷的、没有围墙的网上精英教育实验室，目标是培养创新时代少年英才。由家长自主申请，实验室择优录取。
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* 使用本地视频 */}
                    {/* <video
                      width={isMobile ? "60%" : "260px"}
                      height="auto"
                      autoPlay
                      muted
                      loop
                      controls
                      style={{ margin: "auto" }}
                    >
                      <source src="/video/lulaborigin.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}
                    {/* 使用在线视频（酷播云） */}
                    <iframe
                      style={{ width: isMobile ? '60%' : '285px', height: isMobile ? "320px" : "500px", border: 'none', "position": "relative"}}
                      allowFullScreen
                      src={'http://go.plvideo.cn/front/video/preview?vid=d309ba6b1cda2ecfc8934ec686bf78d0_d'}
                      title="Embedded Video Player"
                    />
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
                陆向谦实验室创始人介绍
              </Typography>
              <Grid container spacing={6} alignItems="center" style={{ paddingTop: isMobile ? "25px" : "50px" }} direction={isMobile ? "column" : "row"}>
                <Grid item xs={12} md={4}>
                  <Box className="w-full h-full rounded-lg flex items-center justify-center">
                    <img
                      src="/images/LuXiangqian01.png"
                      className="w-full h-full object-cover"
                      style={{ width: isMobile ? "200px" : "500px" }}
                      alt="Lu Xiangqian"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Card className="h-full shadow-lg">
                    <CardContent className="h-full flex flex-col justify-between p-6">
                      <Typography variant={isMobile ? "body1" : "h6"} className="text-lg space-y-4">
                        <p>清华大学教授，教育部全国高教教师网络培训中心创新/创业特聘教授，美国加州伯克利大学Hass商学院博士</p>
                        <p>陆老师有两个孩子，都初中就加入陆向谦实验室</p>
                        <p>女儿：斯坦福大学，学业期间就兼职pinterest早期雇员，现为硅谷名企早期雇员。</p>
                        <p>儿子：加州伯克利大学，19岁就全职加入Uber，同时没有耽误完成学业。现为谷歌高级工程师。</p>
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
                陆向谦教授寄语
              </Typography>
              <Typography variant={isMobile ? "body1" : "h5"} className="text-center text-xl italic" style={{ paddingTop: "10px", color: "gray" }}>
                "陆老师的教育是很有特点的，我们带着孩子们练英语的童子功，计算机的童子功，人工智能的童子功。"
              </Typography>
            </Box>

            {/* Additional Information */}
            <Grid container spacing={6} className="mb-20" style={{ paddingBottom: "180px" }}>
              {[
                { title: '陆向谦实验室混龄吗？为什么要做混龄教育？', link: 'mp.weixin.qq.com/s/ihmL2znR1r0DyVOY8QcffA' },
                { title: '硅谷新媒体导师凯莉彭访谈陆老师：如何活出不留遗憾的人生？', link: 'mp.weixin.qq.com/s/BDxkfaO3vE1oNkIKy5yLzA' },
                { title: '老喻对话陆向谦：厉害的人都在用"项目式学习"教孩子', link: 'mp.weixin.qq.com/s/B0_A8XNqiA_gkEdiS1WK9A' }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card className="h-full shadow-lg">
                    <CardContent className="h-full flex flex-col justify-between p-6">
                      <Typography variant={isMobile ? "body1" : "h6"} className="mb-4 font-bold" style={{ color: "black" }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" style={{ paddingTop: "10px" }}>
                        <a href={`https://${item.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          阅读更多
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