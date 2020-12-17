import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import Hero from "../../General/Hero/Hero";
import Table from "./ClassTable/Table";
import courseHeroInfo from "../../Data/Course/Xccelerate/Course";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    [theme.breakpoints.up("xs")]: {
      padding: "0 2rem",
      fontSize: "11px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0 2rem",
      fontSize: "12px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 3rem",
      fontSize: "14px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 4rem",
      fontSize: "16px",
    },
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

function Course(props) {
  const data =
    props.location.pathname === "/datascience"
      ? 0
      : props.location.pathname === "/webdevelopment"
      ? 1
      : props.location.pathname === "/uxdesign"
      ? 2
      : null;
  // const [courseHero, setCourseHero] = useState({
  //   title: { courseHeroInfo },
  // });
  console.log(props.location.pathname);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {/* -------------------------------------------------- Section 1 -------------------------------------------------- */}
        <div className="section-1 container">
          <Hero
            title={courseHeroInfo[data].title}
            content={courseHeroInfo[data].content}
            url={courseHeroInfo[data].url}
            buttonTitle="Get Started"
            image={courseHeroInfo[data].image}
            scroll="#card-container"
          />
        </div>
        {/* -------------------------------------------------- Section 2 -------------------------------------------------- */}
        <div className="section-2 container" id="classroom-table">
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: 500, fontSize: "4rem" }}
          >
            Classrooms
          </Typography>

          <Table />
        </div>
      </Container>
    </div>
  );
}

export default withRouter(Course);
