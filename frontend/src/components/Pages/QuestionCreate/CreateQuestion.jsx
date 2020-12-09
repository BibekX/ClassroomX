import React, { useState } from "react";
import {
  Container,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core";
import ReactQuill from "react-quill";
import "./AskQuestion.scss";
import { Link } from "react-router-dom";

function CreateQuestion(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleTextChange(event) {
    const { name, value } = event.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitPost(event) {
    props.onAdd(text);
    setText({
      title: "",
      content: "",
    });
    // setFiles(files);
    event.preventDefault();
  }

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={1} sm={0}></Grid>
          <Grid item md={10} sm={12}>
            <Grid item>
              <Typography variant="h2" style={{ marginBottom: "4rem" }}>
                Ask a new Question
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                padding: "2rem",
                border: "1px solid #457b9d",
                borderRadius: "10px",
              }}
            >
              <div class="question-container">
                <form>
                  <Typography variant="body1">Title</Typography>
                  <InputBase
                    onChange={handleTextChange}
                    name="title"
                    value={text.title}
                    style={{
                      width: "100%",
                      marginBottom: "3rem",
                      border: "1px solid #6d6875",
                      paddingLeft: "10px",
                    }}
                    placeholder={
                      "Example: How to trigger checkbox onChange event through function in React?"
                    }
                  />
                  <Typography variant="body1">Body</Typography>
                  <ReactQuill
                    name="content"
                    // onEditorChange={handleTextChange}
                    // onFilesChange={submitPost}
                    value={text.content}
                    placeholder={
                      "Explain your question in detail like you're explaining it to someone"
                    }
                    modules={CreateQuestion.modules}
                    formats={CreateQuestion.formats}
                    style={{
                      border: "1px solid #6d6875",
                    }}
                  />

                  <div style={{ textAlign: "right" }}>
                    <Link to="/postquestion">
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ marginTop: "2rem" }}
                        onClick={submitPost}
                      >
                        Post
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
            </Grid>
          </Grid>
          <Grid item md={1} sm={0}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

CreateQuestion.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
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
  "blockquote",
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
