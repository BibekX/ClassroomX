import React, { useState, useEffect } from "react";
import { Container, Typography, InputBase, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";
import { Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";
// import QuestionInfo from "../../Data/Question/Question";
import axios from "axios";

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

  const [question, setQuestion] = useState([]);
  const [users, setUsers] = useState([]);

  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value.toLowerCase());
    // setRowsPerPage(-1);
    // e.target.value === "" && setRowsPerPage(5);
  };

  useEffect(() => {
    // let dummy = JSON.stringify({
    //   SearchInUsers : false,
    //   SearchInCourses : false,
    //   SearchInClasses : false,
    //   SearchInNotes : false,
    //   SearchInQuestions : true,
    //   SearchInAnswers : false,
    // });
    axios
      .get(`http://localhost:8080/search`)
      .then(({ data }) => {
        console.log("This is my data ", data);
        let info = data.splice(0, 1);
        setQuestion(data);
        console.log(question);
        setUsers(data.userDetails);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container justify="center">
          <Typography variant="h2" style={{ fontWeight: 500, fontSize: "5em" }}>
            QuestionFlow
          </Typography>
        </Grid>
        <Grid container justify="center">
          <InputBase
            classes={styles}
            style={{
              width: "80%",
              margin: "2rem 0",
              backgroundColor: "#121212",
            }}
            placeholder={"Search Questions"}
            startAdornment={<SearchIcon />}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid container justify="center"></Grid>
        <Grid container justify="center">
          {/* <Link to="/askquestion" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Ask Question
            </Button>
          </Link> */}
        </Grid>
        <Grid
          container
          spacing={4}
          justify="center"
          style={{ marginTop: "3em" }}
        >
          {question && question.length > 0
            ? question
                .map(
                  (info) =>
                  info.title &&
                    info.title.toLowerCase().includes(filter) && (
                      <Grid item xs={10} key={info.id}>
                        <Link
                          to={`/question/${info.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <QuestionCard
                            title={info.title}
                            tags={info.tags}
                            votes={info.votes}
                            // comment={info.answers.length}
                            user={info.users}
                          />
                        </Link>
                      </Grid>
                    )
                )
                .reverse()
            : "no data?"}
        </Grid>
      </Container>
    </div>
  );
}
