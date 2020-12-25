import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/styles";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import UserComment from "./UserComment";

export default function IndividualQuestion(props) {
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
      margin: "0 auto",
    },
    card: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
      padding: "1em",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 70,
      //   borderRight: "solid 1px #fff",
      marginTop: "1em",
    },
    icon: {
      margin: "0 auto",
    },
  }));
  //   -----------------------------------------------------------------------------------------------------
  const { questionID } = props.match.params;
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState([]);
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const [voteColor, setVoteColor] = useState("");
  const [noOfPages] = useState(Math.ceil(answers.length / itemsPerPage));
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const count = 10;
  const [vote, setVote] = useState(count);
  const handleVote = () => {
    setVote(count + 1);
    setVoteColor("#abff4f");
  };

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/question/${questionID}`)
      .then(({ data }) => {
        console.log(data);
        setQuestion(data.baseDetails);
        setUser(data.userDetails);
        setAnswers(data.listOfAnswers);
      })
      .catch((err) => console.error(err));
  }, [questionID]);

  //   ----------------------------------------------------------------------------------------------------
  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: 500, fontSize: "5.5em", padding: "0.5em" }}
      >
        Question
      </Typography>
      <Card className={classes.card}>
        <CardContent className={classes.cover}>
          <CardActionArea>
            <ArrowUpwardIcon
              onClick={handleVote}
              fontSize="large"
              className={classes.icon}
              style={{ color: voteColor }}
            />
          </CardActionArea>
          <Typography variant="h6" align="center">
            {vote}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          <Grid container style={{ display: "block" }}>
            <Grid item>
              <Typography variant="h3" style={{ fontWeight: 500 }}>
                {question.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{ margin: "1em auto", fontSize: "1.5em" }}
              >
                {question.text}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{question.tags}</Typography>
            </Grid>
          </Grid>
        </div>
      </Card>
      <hr style={{ margin: "2em auto" }} />
      <Grid container justify="space-between" style={{ marginBottom: "3em" }}>
        <Grid container>
          <Typography variant="h6">
            {answers.length} {answers.length > 1 ? "answers" : "answer"}
          </Typography>
        </Grid>
      </Grid>
      {/* --------------------------------------- answer ---------------------------------------------- */}

      <Grid
        container
        justify="center"
        style={{ marginTop: "1em", display: "block" }}
        spacing={4}
      >
        {answers
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((answer) => {
            return (
              <Grid item key={answer.id}>
                <Card className={classes.card}>
                  <CardContent className={classes.cover}>
                    <CardActionArea>
                      <ArrowUpwardIcon
                        fontSize="large"
                        className={classes.icon}
                      />
                    </CardActionArea>
                    <Typography variant="h6" align="center">
                      {answer.votes}
                    </Typography>
                  </CardContent>
                  <div className={classes.details}>
                    <Grid container>
                      <Grid item>
                        <Typography
                          variant="body1"
                          style={{ margin: "1em auto", fontSize: "1.5em" }}
                        >
                          {answer.text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            );
          })}
        <Grid container justify="center">
          <Pagination
            count={noOfPages}
            page={page}
            onChange={handlePageChange}
            defaultPage={1}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            style={{ margin: "2em auto 1em" }}
          />
        </Grid>
        <UserComment />
      </Grid>
      {/* -------------------------------------------------------------------------------------------- */}
    </div>
  );
}
