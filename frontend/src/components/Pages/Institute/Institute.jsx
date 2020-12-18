import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Cards from "../../General/Cards/Cards";
import Hero from "../../General/Hero/Hero";
import xccelerateCourse from "../../Data/Course/Xccelerate/Course";
import brainStationCourse from "../../Data/Course/BrainStation/Course";
import flatironCourse from "../../Data/Course/Flatiron School/Course";
import MembersList from "./MembersList/MembersList";
import instituteInfo from "../../Data/Institute/Institute";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
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
  hero2_title: {
    padding: "1em 0 2em",
    fontWeight: 500,
  },
}));

function Institute(props) {
  const classes = useStyles();
  // const [edit, setEdit] = useState({
  //   title: "",
  //   content: "",
  //   url: "",
  //   image: "",
  // });
  // const styles = useRowGutterStyles({ size: "1rem" });
  // const [component, setComponent] = useState({});

  const iData =
    props.location.pathname === "/xccelerate"
      ? 0
      : props.location.pathname === "/brainstation"
      ? 1
      : props.location.pathname === "/flatiron"
      ? 2
      : null;

  const courseData =
    props.location.pathname === "/xccelerate"
      ? xccelerateCourse
      : props.location.pathname === "/brainstation"
      ? brainStationCourse
      : props.location.pathname === "/flatiron"
      ? flatironCourse
      : null;

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {/* -------------------------------------------------- Section 1 -------------------------------------------------- */}
        <div className="section-1">
          <Hero
            title={instituteInfo[iData].title}
            content={instituteInfo[iData].content}
            url={instituteInfo[iData].url}
            buttonTitle="Get Started"
            image={instituteInfo[iData].image}
            scroll="#card-container"
          />
        </div>

        {/* -------------------------------------------------- Section 2 -------------------------------------------------- */}
        <div
          className="section-2"
          id="card-container"
          style={{ paddingTop: "2em" }}
        >
          <Grid container justify="center">
            <Grid item>
              <Typography variant="h3" className={classes.hero2_title}>
                ― Courses To Get You Started ―
              </Typography>
            </Grid>
          </Grid>
          {/* ------------------------ Card -------------------------- */}
          <Grid container padding={5} spacing={5} justify="center">
            {courseData.map((info) => (
              <Grid item md={4} sm={6} key={info.id}>
                <Cards
                  id={info.id}
                  title={info.title}
                  content={info.content}
                  image={info.image}
                  link={info.link}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        {/* -------------------------------------------------- Section 3 -------------------------------------------------- */}
        <div className="section-3">
          <Grid container id="card-container">
            <Typography variant="h3" style={{ fontWeight: 500 }}>
              Members
            </Typography>
          </Grid>
          <Grid container>
            <MembersList />
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default withRouter(Institute);
