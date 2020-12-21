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
import QuestionInfo from "../../Data/Question/Question";

export default function IndividualQuestion() {
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
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);
  const [noOfPages] = useState(
    Math.ceil(QuestionInfo[0].comment.length / itemsPerPage)
  );
  const [newPage, setNewPage] = useState(QuestionInfo[0].comment);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleNewClick = () => {
    setNewPage(newPage.reverse());
  };

  const classes = useStyles();

  useEffect(() => console.log(), [newPage]);

  //   ----------------------------------------------------------------------------------------------------
  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: 500, fontSize: "4.5em", padding: "0.5em" }}
      >
        Question
      </Typography>
      <Card className={classes.card}>
        <CardContent className={classes.cover}>
          <CardActionArea>
            <ArrowUpwardIcon fontSize="large" className={classes.icon} />
          </CardActionArea>
          <Typography variant="h6" align="center">
            {QuestionInfo[0].votes}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          <Grid container>
            <Grid item>
              <Typography variant="h3">{QuestionInfo[0].title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" style={{ margin: "1em auto" }}>
                {QuestionInfo[0].content}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{QuestionInfo[0].tags}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Typography variant="body1" color="primary">
              {QuestionInfo[0].username}
            </Typography>
          </Grid>
        </div>
      </Card>
      <hr style={{ margin: "2em auto" }} />
      <Grid container justify="space-between" style={{ marginBottom: "3em" }}>
        <Grid container>
          <Typography variant="h6">
            {QuestionInfo[0].comment.length}{" "}
            {QuestionInfo[0].comment.length > 1 ? "Comments" : "Comment"}
          </Typography>
        </Grid>
        <Grid container justify="flex-end" style={{ display: "inline-flex" }}>
          <Button variant="outlined" onClick={handleNewClick}>
            New
          </Button>
          <Button variant="outlined">Top</Button>
        </Grid>
      </Grid>
      {/* --------------------------------------- Comment ---------------------------------------------- */}

      <Grid container justify="center" style={{ marginTop: "1em" }} spacing={4}>
        {QuestionInfo[0].comment
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((comment) => {
            return (
              <Grid item key={comment.id}>
                <Card className={classes.card}>
                  <CardContent className={classes.cover}>
                    <CardActionArea>
                      <ArrowUpwardIcon
                        fontSize="large"
                        className={classes.icon}
                      />
                    </CardActionArea>
                    <Typography variant="h6" align="center">
                      {comment.votes}
                    </Typography>
                  </CardContent>
                  <div className={classes.details}>
                    <Grid container>
                      <Grid item>
                        <Typography
                          variant="body1"
                          style={{ margin: "1em auto" }}
                        >
                          {comment.content}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" color="primary">
                          {comment.username}
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            );
          })}
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
      {/* -------------------------------------------------------------------------------------------- */}
    </div>
  );
}
