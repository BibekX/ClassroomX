import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";
import Hero from "../../General/Hero/Hero";
import Table from "./ClassTable/Table";
import MembersList from "../Institute/MembersList/MembersList";
import xccelerateCourse from "../../Data/Course/Xccelerate/Course";
import brainStationCourse from "../../Data/Course/BrainStation/Course";
import flatironCourse from "../../Data/Course/Flatiron School/Course";
import { withRouter } from "react-router-dom";
import ClassPopup from "./Create/ClassPopup";

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
    props.location.pathname === "/xccelerate-datascience" ||
    props.location.pathname === "/brainstation-data-science" ||
    props.location.pathname === "/flatiron-cybersecurity-analytics"
      ? 0
      : props.location.pathname === "/xccelerate-webdevelopment" ||
        props.location.pathname === "/brainstation-digital-leadership" ||
        props.location.pathname === "/flatiron-cybersecurity-engineering"
      ? 1
      : props.location.pathname === "/xccelerate-uxdesign" ||
        props.location.pathname === "/brainstation-digital-marketing" ||
        props.location.pathname === "/flatiron-datascience"
      ? 2
      : props.location.pathname === "/brainstation-product-management" ||
        props.location.pathname === "/flatiron-software-engineering"
      ? 3
      : props.location.pathname === "/brainstation-use-experience-design"
      ? 4
      : props.location.pathname === "/brainstation-web-development"
      ? 5
      : null;

  const courseParent =
    props.location.pathname === "/xccelerate-datascience" ||
    props.location.pathname === "/xccelerate-webdevelopment" ||
    props.location.pathname === "/xccelerate-uxdesign"
      ? xccelerateCourse
      : props.location.pathname === "/brainstation-data-science" ||
        props.location.pathname === "/brainstation-digital-leadership" ||
        props.location.pathname === "/brainstation-digital-marketing" ||
        props.location.pathname === "/brainstation-product-management" ||
        props.location.pathname === "/brainstation-use-experience-design" ||
        props.location.pathname === "/brainstation-web-development"
      ? brainStationCourse
      : props.location.pathname === "/flatiron-cybersecurity-analytics" ||
        props.location.pathname === "/flatiron-datascience" ||
        props.location.pathname === "/flatiron-cybersecurity-engineering" ||
        props.location.pathname === "/flatiron-software-engineering"
      ? flatironCourse
      : null;
  // const [courseHero, setCourseHero] = useState({
  //   title: { courseHeroInfo },
  // });
  console.log(props.location.pathname);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {/* -------------------------------------------------- Section 1 ---------------------------------------------- */}
        <div className="section-1 container" style={{ marginBottom: "1em" }}>
          <Hero
            title={courseParent[data].title}
            content={courseParent[data].content}
            url={courseParent[data].url}
            buttonTitle="Get Started"
            image={courseParent[data].image}
            scroll="#classroom-table"
          />
        </div>
        <Grid container>
          <MembersList />
          <Typography
            variant="h3"
            style={{
              fontWeight: 500,
              marginLeft: "0.5em",
            }}
          >
            Add Members
          </Typography>
        </Grid>
        {/* -------------------------------------------------- Section 2 -------------------------------------------------- */}
        <div
          className="section-2 container"
          id="classroom-table"
          style={{ paddingTop: "5em" }}
        >
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: 500, fontSize: "4rem" }}
          >
            Classrooms
          </Typography>
          <Grid container justify="center">
            <ClassPopup buttonName="Create" title="Create Your Class" />
          </Grid>

          <Table />
        </div>
      </Container>
    </div>
  );
}

export default withRouter(Course);
