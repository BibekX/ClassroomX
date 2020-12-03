import React from "react";
import Navbar from "../../General/Navbar/Header";
import { Container, Grid, Typography, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AcUnit } from "@material-ui/icons";
import "./Style.scss";

const useStyles = makeStyles({
  root: {
    margin: "0 5%",
  },
  heading_hero: {
    color: "black",
    fontWeight: 700,
    paddingTop: "6rem",
  },
  heading_hero2: {
    paddingTop: "4%",
    color: "black",
    fontWeight: 700,
  },
  hero_image: {
    paddingTop: "3rem",
    maxWidth: "45rem",
    width: "100%",
    height: "auto",
  },
});

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Container maxWidth="xl">
        {/* ----------------------------------- Section 1 ------------------------------------------------ */}
        <div className="section1 container">
          <Grid container direction="row" justify="center" spacing={5}>
            <Grid item md={4} sm={12}>
              <Typography variant="h2" className={classes.heading_hero}>
                Good Class Will Make Learning Fun
              </Typography>
              <Typography
                variant="body1"
                className="hero1_body"
                align="justify"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum
                dolor sit amet, consectetur adipiscing elit
              </Typography>
            </Grid>
            <Grid item md={6} sm={12}>
              <img
                src="./img/background/hero.png"
                alt="background"
                className={classes.hero_image}
              />
            </Grid>
          </Grid>
        </div>
        {/* ----------------------------------- Section 2 ------------------------------------------------ */}
        <div className="section2 container">
          <Grid container justify="center" className="hero2_title">
            <Typography
              variant="h3"
              align="center"
              className={classes.heading_hero2}
            >
              Collaborate with Students from Top Institutions
            </Typography>
            <Typography variant="body1" align="justify" className="hero2_body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              consequat enim orci, ut finibus mauris venenatis ut. Vivamus in
              diam est. Proin varius lectus felis, sed tempor dolor faucibus at.
              Duis facilisis pretium est sit amet ornare. Duis lorem risus,
              varius a blandit quis, venenatis at ipsum. Cras a metus dignissim,
              gravida enim a, convallis urna. Phasellus ante felis, tristique
              nec felis et, faucibus convallis nunc.
            </Typography>
            <Button color="primary" variant="contained">
              Explore
            </Button>
          </Grid>
        </div>
        {/* ----------------------------------- Section 3 ------------------------------------------------ */}
        <div className="section3 container">
          <Typography variant="h3" direction="row" justify="center">
            What makes our our collection one of a kind
          </Typography>
          <Grid container spacing={7}>
            <Grid item lg={4} md={6} sm={12}>
              <AcUnit />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <AcUnit />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <AcUnit />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
