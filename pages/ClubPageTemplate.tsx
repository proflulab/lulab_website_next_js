import React from "react";
import App from "../app/title/page";
import End from "../app/title/end";
import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Club } from "./clubInfo/ClubInfoBase";
import Image from 'next/image';
import "../app/globals.css";

interface ClubIntroProps {
    club: Club;
}

const ClubPageTemplate: React.FC<ClubIntroProps> = ({ club }) => {
    return (
        <>
            <App />
            <Grid container justifyContent="center" spacing={2} style={{ paddingTop: '25px' }}>
                <Grid item xs={8} >
                    <Typography style={{ color: '#252A34', fontSize: '54px', fontWeight: 'bold', textAlign: 'center' }}>
                        {club.mainTitle}
                    </Typography>
                    <Typography variant="h5" style={{ color: '#797979', paddingTop: '10px', textAlign: 'center',  whiteSpace: 'pre-wrap' }}>
                        {club.overview}
                    </Typography>
                </Grid>
                <Grid item xs={10} style={{ paddingTop: '30px', paddingBottom: '60px' }}>
                    <Image src={club.impressionImage} alt="Club Impression" layout="responsive" width={1666} height={625} />
                </Grid>

                <Grid container spacing={2} style={{ backgroundColor: '#EEF4FB', height: '600px', paddingTop: '50px', paddingLeft: '80px' }}>
                    {/* 图片 */}
                    <Grid item xs={5} style={{ paddingTop: '60px', paddingLeft: '80px', position: 'absolute' }}>
                        <Image src={club.firstExampleImage} alt="First Example" layout="responsive" width={816} height={520} />
                    </Grid>

                    {/* 宣传语展板 */}
                    <Grid item xs={6} style={{ paddingLeft: '600px' }}>
                        <Grid item style={{ paddingLeft: '70px', paddingRight: '20px',paddingTop: '30px', backgroundColor: '#FFFFFF', width: '720px', height: '450px' }}>
                            {/* 宣传语内容 */}
                            <Typography style={{ color: '#515151', fontSize: '18px',  whiteSpace: 'pre-wrap' }}>
                                {club.promotionContent}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ paddingTop: '70px', paddingBottom: '60px' }}>
                    <Grid item xs={6} style={{ paddingLeft: '120px' }}>
                        <Typography variant="h5" gutterBottom style={{ paddingLeft: '30px', fontWeight: 'bold', paddingBottom: '10px' }}>
                            {club.harvestTitle}
                        </Typography>
                        <Grid item style={{ backgroundColor: '#F2F2F2', width: '720px' }} boxShadow={2}>
                            <List style={{ paddingLeft: '40px', width: '650px' }}>
                                {club.harvestContent.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={item.subheading} secondary={item.description} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} style={{ paddingTop: '100px' }}>
                        <Image src={club.secondExampleImage} alt="Second Example" layout="responsive" width={816} height={520} />
                    </Grid>
                </Grid>
            </Grid>
            <End />
        </>
    );
}

export default ClubPageTemplate;