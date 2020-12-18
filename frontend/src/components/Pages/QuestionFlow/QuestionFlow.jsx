import React from "react";
import {
  Container,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import QuestionInfo from "../../Data/Question/Question";

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
}));

export default function QuestionFlow() {
  const classes = useStyles();
  const styles = useBorderedInputBaseStyles();
  return (
    <div className={classes.root}>
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
        <Grid container spacing={4} style={{ marginTop: "3em" }}>
          {QuestionInfo.map((info) => (
            <Grid item xs={12} key={info.id}>
              <Link to="/individualquestion" style={{ textDecoration: "none" }}>
                <QuestionCard
                  title={info.title}
                  tags={info.tags}
                  upvote={info.upvote}
                  comment={info.comment}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
