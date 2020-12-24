import React, { useState } from "react";
import {
  Container,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import "./CreateQuestion.css";
import { Link } from "react-router-dom";
import axios from "axios";

// ---------------------------------------------------------------------------------------------

function CreateQuestion() {
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
    // classname: "test",
    text: "",
    tags: [],
    type: "question",
  });

  const { title, text } = state;

  function handleInputChange(event) {
    const { name, value } = event.target;
    setState((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleContentChange(value) {
    setState((prevValue) => {
      return { ...prevValue, text: value };
    });
  }

  // function submitPost() {
  //   setState({
  //     title: "",
  //     text: "",
  //     tags: "".split(","),
  //     type: "question",
  //   });
  // }

  const submitHandler = (event) => {
    axios
      .post("http://localhost:8080/newQuestion", state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // -------------------------------------------- Tags ----------------------------------------------------------

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
                  <Typography variant="body1">Title</Typography>
                  <InputBase
                    onChange={handleInputChange}
                    name="title"
                    value={title}
                    style={{
                      width: "100%",
                      marginBottom: "2rem",
                      border: "1px solid #6d6875",
                      paddingLeft: "10px",
                    }}
                    placeholder={
                      "Example: How to trigger checkbox onChange event through function in React?"
                    }
                  />

                  <Typography variant="body1">Body</Typography>
                  <ReactQuill
                  name="text"
                    value={text}
                    onChange={handleContentChange}
                    placeholder={
                      "Explain your question in detail like you're explaining it to someone"
                    }
                    modules={CreateQuestion.modules}
                    formats={CreateQuestion.formats}
                    style={{
                      border: "1px solid #6d6875",
                    }}
                  />

                  {/* <Typography variant="body1" style={{ marginTop: "2rem" }}>
                    Tags
                  </Typography>
                  <InputBase
                  name="tags"
                  onChange={handleInputChange}
                  value={tags}
                    style={{
                      width: "100%",
                      marginBottom: "3rem",
                      border: "1px solid #6d6875",
                      paddingLeft: "10px",
                    }}
                    placeholder={"Example: javascript, nodejs, express"}
                  /> */}

                  {/* ---------------------------------- */}

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
      </Container>
    </div>
  );
}

CreateQuestion.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "code-block"],
    [{ background: [] }, { color: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

CreateQuestion.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "code-block",
  "background",
  "color",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "clean",
];

export default CreateQuestion;
