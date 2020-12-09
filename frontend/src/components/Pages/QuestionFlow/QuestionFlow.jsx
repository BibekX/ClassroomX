import React from "react";
import {
  Container,
  Typography,
  TextField,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   searchContainer: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     padding: "0 20px",
//     margin: "5px 0",
//   },
//   searchIcon: {
//     alignSelf: "flex-end",
//     marginBottom: "5px",
//   },
//   searchInput: {
//     width: "1000px",
//     margin: "5px",
//   },
// }));

export default function QuestionFlow() {
  // const classes = useStyles();
  const styles = useBorderedInputBaseStyles();
  return (
    <div>
      <Container maxWidth="xl">
        <Grid container justify="center">
          <Typography variant="h2">QuestionFlow</Typography>
          <InputBase
            classes={styles}
            style={{ width: "80%", margin: "2rem 0" }}
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
