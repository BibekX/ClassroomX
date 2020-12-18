import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
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
    borderRight: "solid 1px #fff",
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
                {props.tags}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
              {props.user}
            </Typography> */}
            </CardContent>
          </div>
        </CardActionArea>
        <CardContent className={classes.cover}>
          <ArrowUpwardIcon className={classes.icon} />
          <Typography align="center">{props.upvote}</Typography>
          <QuestionAnswerIcon className={classes.icon} />
          <Typography align="center">{props.comment}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
