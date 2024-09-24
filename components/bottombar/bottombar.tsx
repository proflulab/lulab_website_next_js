'use client';
import React from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


const BottomBar: React.FC = () => {
    const email = process.env.REACT_APP_EMAIL;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const t = useTranslations('BottomBar');

    return (
        <Box
            sx={{
                width: '100%',
                height: isMobile ? '400px' : '240px',
                backgroundColor: 'white',
            }}
        >
            <Grid container alignItems="center" >
                {/* Left section */}
                <Grid item xs={12} sm={3} style={{ paddingLeft: isMobile ? '20px' : '100px', paddingTop: isMobile ? '30px' : '50px' }}>
                    <Box display="flex" alignItems="center">
                        <Image src="/images/logo.svg" alt="Lu Lab Logo" width={isMobile ? 50 : 60} height={isMobile ? 50 : 60} />
                        <Typography variant={isMobile ? "h5" : "h4"} sx={{ marginLeft: theme.spacing(2) }} style={{ fontWeight: 'bold' }}>
                            Lu Lab
                        </Typography>
                    </Box>
                </Grid>

                {/* Middle section */}
                <Grid item xs={12} sm={4} style={{ paddingLeft: isMobile ? '20px' : '30px', paddingTop: isMobile ? '10px' : '50px' }}>
                    <Box textAlign={'left'}>
                        <Typography variant="h6">{t('contact_info')}</Typography>
                        <Typography variant="body2">{email}</Typography>
                        <Typography variant="body2">
                            {t('contact_address')}
                        </Typography>
                    </Box>
                </Grid>
                {/* Right section */}
                <Grid item xs={12} sm={3} style={{ paddingLeft: '20px', paddingTop: isMobile ? '10px' : '80px' }}>
                    <Box textAlign={'left'}>
                        <Typography variant="body1">{t('scan')}</Typography>
                        <Box mt={1} >
                            <Image src="/images/QR_code.jpg" alt="QR Code" width={80} height={80} />
                        </Box>
                    </Box>
                </Grid>
                {/* Social media icons */}
                <Grid item xs={12} sm={2} style={{ paddingLeft: '20px', paddingTop: isMobile ? '10px' : '30px', paddingBottom: isMobile ? '20px' : '0px' }}>
                    <Typography variant="body1">{t('more_about')}</Typography>
                    <Box display="flex" textAlign={'left'} mt={2}>
                        <Link href="https://v.douyin.com/Ceir96WV/" passHref>
                            <Image src="/images/douyin-icon.jpg" alt="Douyin" width={24} height={24} style={{ marginRight: '8px' }} />
                        </Link>
                        <Link href="https://space.bilibili.com/382176302" passHref>
                            <Image src="/images/bilibili-icon.jpg" alt="Bilibili" width={24} height={24} style={{ marginRight: '8px' }} />
                        </Link>
                        <Link href="https://www.xiaohongshu.com/user/profile/62dea0fe000000001f015e5a" passHref>
                            <Image src="/images/xiaohongshu-icon.jpg" alt="Xiaohongshu" width={24} height={24} />
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BottomBar;