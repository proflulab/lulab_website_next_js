/* eslint-disable @next/next/no-img-element */
"use client";
import { Image } from "@nextui-org/react";
import React, { useState, useEffect, useRef } from "react";
import App from "../title/page";
import End from "../title/end";
import "../../app/globals.css"
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Box
} from "@mui/material";


export default function About() {
  return (
    <>
      <App />
      <Grid container justifyContent="center" spacing={2} style={{ background: "white" }}>

        <Grid container justifyContent="center" style={{ backgroundImage: "url('/background02.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Typography variant="h3" align="center" gutterBottom style={{ paddingTop: '60px', fontWeight: 'bold', color: 'black' }}>
            Thank you for your interest in Lu Lab!
          </Typography>

          <Grid container spacing={2} style={{ paddingTop: '30px', paddingBottom: '60px' }}>
            <Grid item xs={12} md={1} style={{ paddingLeft: '400px' }}>
              <Avatar
                alt="Lewis X. Lu"
                src="/avatar.jpeg"
                sx={{ width: 100, height: 100, mr: 2 }}
              />
            </Grid>
            <Grid item md={6}>
              <Card sx={{ maxWidth: 600, mx: 'auto', mt: 2 }}>
                <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="h5" paragraph>
                      So much has been accomplished since Lu Lab was founded in 1994.
                      Our lab has grown in such tremendous ways, but I am so proud that
                      our mission and our unique character have remained firmly in place.
                    </Typography>
                    <Typography variant="h5" paragraph>
                      I invite you to explore our website, discover more about our
                      worldwide learning community, and see what makes the Lu Lab
                      experience so extraordinary.
                    </Typography>
                    <Typography variant="h5">
                      -Lewis X. Lu, Ph.D.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" style={{ paddingTop: '30px' }} >
          <Box>
            <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'black' }}>
              Lu Lab Tuition Standard
            </Typography>
            <Typography variant="h4" align="center" gutterBottom style={{ color: 'black' }}>
              Choose a suitable club to meet your needs
            </Typography>
          </Box>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 2 }} style={{ width: '1200px', paddingBottom: '60px' }}>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Industrial grade
                </Typography>
                {/* <Box sx={{ width: 500, height: 240, bgcolor: '#f0f0f0', mb: 2 }} /> */}
                <img src="/industrial-grade.png" style={{ width: 500, height: 300 }} />
                <Typography variant="body1" style={{paddingTop: '10px'}}>
                  Individual member ¥38,000
                </Typography>
                <Typography variant="body1">
                  Family member ¥76,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Metaverse grade
                </Typography>
                {/* <Box sx={{ width: 500, height: 240, bgcolor: '#f0f0f0', mb: 2 }} /> */}
                <img src="/metaverse-grade.png" style={{ width: 500, height: 300 }} />
                <Typography variant="body1" style={{paddingTop: '10px'}}>
                  Individual member ¥19,000
                </Typography>
                <Typography variant="body1">
                  Family member ¥38,000
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Grid>
      <End />
    </>
  );
}
