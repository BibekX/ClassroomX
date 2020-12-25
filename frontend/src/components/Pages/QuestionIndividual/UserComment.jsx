import React, { useState } from "react";
import {
  Typography,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import axios from "axios";

// ---------------------------------------------------------------------------------------------

export default function UserComment() {
  const useStyles = makeStyles((theme) => ({
  }));

  const classes = useStyles();

  const [state, setState] = useState({
    text: "",
    type: "answer",
  });

  const { text } = state;

  function handleInputChange(event) {
    const { value } = event.target;
    setState((prevValue) => {
      return { ...prevValue, text: value };
    });
  }

  const submitHandler = (event) => {
    axios
      .post("http://localhost:8080/newAnswer", state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // ----------------------------------------------------------------------------------------------------------------
  return (
    <div>

        <Grid container justify="center">
          <Grid item md={10} sm={12}>
            <Grid
              container
              style={{
                padding: "2rem",
                borderRadius: "10px",
              }}
              justify="center"
            >
              <div className="question-container">
                <form onSubmit={submitHandler}>

                  <Typography variant="h2" align="center" style={{marginBottom: "1em", fontWeight: "500"}}>Your Answer</Typography>
                  <InputBase
                    onChange={handleInputChange}
                    name="text"
                    value={text}
                    style={{
                      width: "100%",
                      marginBottom: "2rem",
                      border: "4px solid #fff",
                      paddingLeft: "10px",
                      minWidth: "50rem"
                    }}
                    multiline
                    rows={10}
                    placeholder={
                      "Your answer"
                    }
                  />

                  {/* ----------------------------------- */}
                  <div style={{ textAlign: "right" }}>
                    <Link to="/questionflow" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ marginTop: "2rem" }}
                        type="submit"
                      >
                        Post
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}
