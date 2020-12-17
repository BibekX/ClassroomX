import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardActions,CardContent,Button,Typography} from "@material-ui/core"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  

export default function QuestionCard(props) {
        const classes = useStyles();

        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="h3">
                  {props.tags}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.user}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             <ThumbUpIcon />
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
    )
}