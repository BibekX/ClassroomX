import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import "./Style.scss";
import Hero from "../../Hero/Hero";
import Table from "./Table/Table";

const useStyles = makeStyles((theme) => ({
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
}));

export default function Institute() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {/* -------------------------------------------------- Section 1 -------------------------------------------------- */}
        <div className="section-1 container">
          <Hero
            title="Full-Stack Software Engineering"
            body="Our Full-Time Immersive Software Engineering Coding Bootcamp is designed for students with a burning desire to learn the most relevant coding languages and frameworks in the software development industry.
"
            link="https://xccelerate.co/course-detail/HK/FTSE"
            buttonTitle="Learn More"
            image="./img/card/Institute/Xccelerate/Course/Software Engineering/1.png"
            scroll="#classroom-table"
          />
        </div>
        {/* -------------------------------------------------- Section 1 -------------------------------------------------- */}
        <div className="section-2 container">
          <Typography
            className="heading_hero2"
            variant="h3"
            id="classroom-table"
          >
            Classrooms
          </Typography>

          <Table />
        </div>
      </Container>
    </div>
  );
}
