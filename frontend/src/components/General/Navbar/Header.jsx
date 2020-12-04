import {
  AppBar,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Fab,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import * as React from "react";
import SideDrawer from "./SideDrawer";
import BackToTop from "./BackToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  logo: {
    Width: "auto",
    maxHeight: "60px",
  },
});

// const navLinks = [
//   { title: `home`, path: `/` },
//   { title: `question`, path: `/question` },
//   { title: `my class`, path: `/my-class` },
//   { title: `login`, path: `/login` },
//   { title: `sign up`, path: `/sign-up` },
// ];

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <HideOnScroll> */}
      <AppBar position="fixed">
        <Toolbar component="nav">
          <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
            <img
              src="./img/logo/final.png"
              alt="logo"
              className={classes.logo}
            />

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navListDisplayFlex}
              >
                <Router>
                  {/* {navLinks.map(({ title, path }) => ( */}
                  {/* <a href={path} key={title} className={classes.linkText}> */}
                  {/* <ListItem button> */}
                  {/* <ListItemText primary={title} /> */}
                  {/* </ListItem> */}
                  {/* </a> */}
                  {/* ))} */}
                  <Route
                    path="/login"
                    component={Login}
                    className={classes.linkText}
                  />
                  <Route
                    path="/signup"
                    component={Signup}
                    className={classes.linkText}
                  />
                </Router>
              </List>
            </Hidden>
            <Hidden mdUp>{/* <SideDrawer navLinks={navLinks} /> */}</Hidden>
          </Container>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="secondary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </div>
  );
};

export default Header;
