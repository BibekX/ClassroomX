import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import "./Style.scss";
import information from "./Institute_Info/Info";
import Cards from "../../General/Cards/Cards";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
  },
});

export default function Explore() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <div class="section 1 container">
          <Typography variant="h3">Let's Get Started, Toast</Typography>
          <Typography variant="h2">Institutions</Typography>
          <Grid container spacing={5} justify="center">
            {/* ------------------------ Card -------------------------- */}
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
