import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Navbar from "../General/Navbar/Header";
import "./Style.scss";
import information from "./Institute_Info/Info";
import Cards from "./Cards/Cards";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
  },
});

export default function Explore() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Container maxWidth="xl">
        <div class="section 1 container">
          <Typography variant="h3">Let's Get Started, Toast</Typography>
          <Typography variant="h2">Institutions</Typography>
          <Grid container spacing={5} justify="center">
            {/* ------------------------ Card -------------------------- */}
            {information.map((info) => (
              <Grid item md={3}>
                <Cards
                  title={info.title}
                  content={info.content}
                  image={info.image}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
