import React from "react";
import {
  Container,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";
import { Link } from "react-router-dom";

export default function QuestionFlow() {
  // const classes = useStyles();
  const styles = useBorderedInputBaseStyles();
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container justify="center">
          <Typography variant="h2" style={{ fontWeight: 500, fontSize: "5em" }}>
            QuestionFlow
          </Typography>
          <InputBase
            classes={styles}
            style={{
              width: "80%",
              margin: "2rem 0",
              // color: "#fff",
              backgroundColor: "#121212",
            }}
            placeholder={"Search Questions"}
            startAdornment={<SearchIcon />}
          />
        </Grid>
        <Grid container justify="center">
          <Link to="/askquestion" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Ask Question
            </Button>
          </Link>
        </Grid>
      </Container>
    </div>
  );
}
