import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    // borderRight: "solid 1px #fff",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    display: "flex",
    flexDirection: "column",
    width: 70,
  },
  icon: {
    margin: "0 auto",
  },
});

export default function QuestionCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {props.tags.toString()}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.username}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
        <CardContent className={classes.cover}>
          <ArrowUpwardIcon className={classes.icon} />
          <Typography align="center">{props.votes}</Typography>
          <QuestionAnswerIcon className={classes.icon} />
          <Typography align="center">{props.comment.length}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
