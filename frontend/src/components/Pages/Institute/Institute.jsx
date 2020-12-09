import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import "./Institute.scss";
import Cards from "../../General/Cards/Cards";
import Hero from "../../Hero/Hero";
import information from "./Course_Info/Info";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
  },
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

export default function Institute() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {/* -------------------------------------------------- Section 1 -------------------------------------------------- */}
        <div className="section-1 container">
          <Hero
            title="Xccelerate"
            body="Prepare yourself with most in-demand tech skills for your
                career. Learn from expert instructors in Hong Kong."
            link="https://xccelerate.co/"
            buttonTitle="Get Started"
            image="./img/card/Institute/Xccelerate/xccelerate.png"
            scroll="#card-container"
          />
        </div>
        {/* -------------------------------------------------- Section 2 -------------------------------------------------- */}
        <div className="section-2 container">
          <Grid container justify="center">
            <Grid item>
              <Typography variant="h3">
                ― Courses To Get You Started ―
              </Typography>
            </Grid>
          </Grid>
          {/* ------------------------ Card -------------------------- */}
          <Grid container spacing={8} justify="center" id="card-container">
            {information.map((info) => (
              <Grid item md={4}>
                <Cards
                  key={info.id}
                  title={info.title}
                  content={info.content}
                  image={info.image}
                  link={info.link}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
