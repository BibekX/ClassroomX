import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { makeStyles } from "@material-ui/styles";
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

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cover}>
          <CardActionArea>
            <ArrowUpwardIcon fontSize="large" className={classes.icon} />
          </CardActionArea>
          <Typography variant="h6" align="center">
            {QuestionInfo[0].upvote}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          <Grid container>
            <Grid item>
              <Typography variant="h3">{QuestionInfo[0].title}</Typography>
            </Grid>
            <Grid item></Grid>
            <Grid item>
              <Typography variant="body1" style={{ margin: "1em auto" }}>
                {QuestionInfo[0].content}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">{QuestionInfo[0].tags}</Typography>
            </Grid>
          </Grid>
        </div>
      </Card>
    </div>
  );
}
