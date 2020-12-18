import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "22rem",
    height: "100%",
    // backgroundColor: "#05120d",
    // color: "#fff",
    border: "2px solid #00adb5",
    textAlign: "center",
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        to={props.link}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia component="img" height="210" image={props.image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontWeight: 700, fontSize: "2em" }}
          >
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
