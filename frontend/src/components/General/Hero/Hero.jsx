import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  hero_image: {
    marginTop: "3.5rem",
    maxWidth: "40rem",
    width: "100%",
    height: "auto",
    border: "2px solid #00adb5",
  },
  heading_hero: {
    fontWeight: 500,
    fontSize: "4em",
    paddingTop: "3rem",
  },
  hero1_body: {
    padding: "2rem 2rem 1rem 0",
  },
  institute_link: {
    display: "inline-block",
    paddingBottom: "2em",
  },
});

export default function Hero(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item md={6} sm={12}>
        <Typography variant="h2" className={classes.heading_hero}>
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          className={classes.hero1_body}
          align="justify"
        >
          {props.content}
        </Typography>
        <Link
          className={classes.institute_link}
          href={props.url}
          target="_blank"
        >
          {props.url}
        </Link>
        <Grid container spacing="3">
          <Grid item>
            <Button variant="contained" color="primary" href={props.scroll}>
              {props.buttonTitle}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Edit {<EditIcon fontSize="small" />}
            </Button>
          </Grid>
        </Grid>
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
