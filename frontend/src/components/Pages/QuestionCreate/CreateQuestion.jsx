import React, { useState } from "react";
import {
  Container,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import "./CreateQuestion.css";
import axios from "axios";

// ---------------------------------------------------------------------------------------------

export default function CreateQuestion() {
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

  const classes = useStyles();

  const [state, setState] = useState({
    title: "",
    classname: "test",
    text: "",
    tags: [],
    type: "question",
  });

  // --------------------------------- Tags -------------------------------------------------------
  // const removeTag = (i) => {
  //   const newTags = [...tags];
  //   newTags.splice(i, 1);
  //   setState(newTags);
  // };

  // const inputKeyDown = (e) => {
  //   const val = e.target.value;
  //   if (e.key === "Enter" && val) {
  //     if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
  //       return;
  //     }
  //     setState({ tags: [...tags, val] });
  //     tagInput.value = null;
  //   } else if (e.key === "Backspace" && !val) {
  //     removeTag(tags.length - 1);
  //   }
  // };
  // ----------------------------------------------------------------------------------------------

  const { title, text, tags } = state;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setState((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  const submitHandler = () => {
    console.log("submitHandler");
    axios
      .post("http://localhost:8080/newQuestion", state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // ----------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        <Grid container justify="center">
          <Grid item md={10} sm={12}>
            <Grid item>
              <Typography
                variant="h2"
                align="center"
                style={{
                  fontWeight: 500,
                  fontSize: "5em",
                  marginBottom: "4rem",
                }}
              >
                Ask a new Question
              </Typography>
            </Grid>
            <Grid
              container
              style={{
                padding: "2rem",
                border: "1px solid #fff",
                borderRadius: "10px",
              }}
              justify="center"
            >
              <div className="question-container">
                <form onSubmit={submitHandler}>
                  <Typography variant="h5">Title</Typography>
                  <InputBase
                    onChange={handleInputChange}
                    name="title"
                    value={title}
                    style={{
                      minWidth: "50rem",
                      marginBottom: "2rem",
                      border: "3px solid #fff",
                      paddingLeft: "10px",
                    }}
                    placeholder={
                      "Example: How to trigger checkbox onChange event through function in React?"
                    }
                  />

                  <Typography variant="h5">Body</Typography>
                  <InputBase
                    onChange={handleInputChange}
                    name="text"
                    value={text}
                    style={{
                      width: "100%",
                      marginBottom: "2rem",
                      border: "3px solid #fff",
                      paddingLeft: "10px",
                    }}
                    multiline
                    rows={10}
                    placeholder={
                      "Include all the information someone would need to answer your question"
                    }
                  />

                  {/* ------------------- Tags --------------- */}
                  {/* <div className="input-tag">
                    <ul className="input-tag__tags">
                      {tags.map((tag, i) => (
                        <li key={tag}>
                          {tag}
                          <button type="button" onClick={() => removeTag(i)}>
                            +
                          </button>
                        </li>
                      ))}
                      <li className="input-tag__tags__input">
                        <input
                          type="text"
                          onKeyDown={inputKeyDown}
                          ref={(c) => {
                            tagInput = c;
                          }}
                        />
                      </li>
                    </ul>
                  </div> */}
                  {/* ---------------------------------------- */}

                  <Typography variant="h5">Tags</Typography>
                  <InputBase
                    onChange={handleInputChange}
                    name="tags"
                    value={tags}
                    style={{
                      width: "100%",
                      marginBottom: "2rem",
                      border: "3px solid #fff",
                      paddingLeft: "10px",
                    }}
                    multiline
                    placeholder={"Example: javascript, node.js"}
                  />

                  {/* ----------------------------------- */}
                  <div style={{ textAlign: "right" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{ marginTop: "2rem" }}
                      type="submit"
                    >
                      Post
                    </Button>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
