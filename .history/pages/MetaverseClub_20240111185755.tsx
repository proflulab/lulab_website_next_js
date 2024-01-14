/* eslint-disable @next/next/no-img-element */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../app/globals.css"; // 引入全局样式文件
import App from "../app/title/page";
import End from "../app/title/end";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#BBBBBB",
    color: "#ffffff",
    padding: theme.spacing(2),
    textAlign: "left",
    zIndex: 1,
  },
  contentContainer: {
    position: "relative",
    fontWeight: "800",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: theme.spacing(2),
    marginTop: theme.spacing(-4),
    textAlign: "left",
  },
}));

export default function MetaverseClub() {
  const classes = useStyles();

  return (
    <>
      <App />
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={12} className={classes.imageContainer}>
            <img src="/metaverse.png" alt="" className={classes.image} />
            <Paper className={classes.overlay}>
              <Typography variant="h5">
                DEDICATED TO CREATING A VIRTUAL LANGUAGE ENVIRONMENT <br />
                FOR CHILDREN TO ENHANCE THEIR FOREIGN LANGUAGE <br />
                LISTENING AND SPEAKING SKILLS.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} className={classes.contentContainer}>
            <Typography variant="h4" gutterBottom>
              The Metaverse Club is dedicated to creating a virtual language
              <br />
              environment for children to enhance their foreign language
              <br />
              listening and speaking skills. In this unique atmosphere,
              <br />
              children can effortlessly improve their language abilities
              <br /> while enjoying their favorite activities and hobbies.
            </Typography>
            <Typography variant="h5" color="primary">
              Head of Lab, professor Lu
            </Typography>
          </Grid>
        </Grid>
        <hr style={{ marginBottom: "20px" }} />
      </Container>
      <End />
    </>
  );
}
