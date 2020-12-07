import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link, Button } from "@material-ui/core";

const useStyles = makeStyles({
  hero_image: {
    paddingTop: "3rem",
    maxWidth: "45rem",
    width: "100%",
    height: "auto",
  },
  heading_hero: {
    fontWeight: 700,
    paddingTop: "6rem",
  },
});

export default function Hero(props) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={4} sm={12}>
        <Typography variant="h2" className={classes.heading_hero}>
          {props.title}
        </Typography>
        <Typography variant="body1" className="hero1_body" align="justify">
          {props.body}
        </Typography>
        <Link className="instituteLink" href={props.link}>
          {props.link}
        </Link>
        <Button variant="contained" color="primary" href={props.cardSection}>
          {props.buttonTitle}
        </Button>
      </Grid>
      <Grid item md={6} sm={12}>
        <img
          src={props.image}
          alt="background"
          className={classes.hero_image}
        />
      </Grid>
    </Grid>
  );
}
