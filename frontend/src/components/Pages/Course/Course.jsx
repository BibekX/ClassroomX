import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import { Container, Grid, Typography, TextField } from "@material-ui/core";
import "./Style.scss";
import Hero from "../../Hero/Hero";
import SearchIcon from "@material-ui/icons/Search";

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
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    padding: "0 20px",
    margin: "5px 0",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
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
          />
        </div>
        {/* -------------------------------------------------- Section 1 -------------------------------------------------- */}
        <div className="section-2 container">
          <Typography className="heading_hero2" variant="h3">
            Classrooms
          </Typography>

          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              label="Search"
              variant="standard"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
