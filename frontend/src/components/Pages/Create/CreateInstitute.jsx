import React, { useState } from "react";
import { InputBase, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";

const useStyles = makeStyles({
  root: {},
});

export default function CreateInstitute() {
  const styles = useBorderedInputBaseStyles();
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleChange = (event) => {
    event.target.files[0] &&
      setFile(URL.createObjectURL(event.target.files[0]));
    setShowImage(true);
  };

  return (
    <div className={classes.root}>
      <div style={{ textAlign: "center" }}>
        {showImage && (
          <img
            src={file}
            style={{
              maxWidth: "19rem",
              maxHeight: "10rem",
              display: "block",
              margin: "0 auto 1em",
            }}
            alt="pic"
          />
        )}
        <Button variant="contained" component="label">
          <input type="file" onChange={handleChange} hidden />
          Upload Photo
        </Button>
      </div>

      <Typography variant="h6">Institution Name</Typography>
      <InputBase
        classes={styles}
        style={{
          width: "100%",
          // color: "#fff",
          backgroundColor: "#343a40",
        }}
        placeholder="max 35 characters"
        required
        inputProps={{ maxLength: 35 }}
      />

      <Typography variant="h6">Institution Description</Typography>
      <InputBase
        classes={styles}
        style={{
          width: "100%",
          // color: "#fff",
          backgroundColor: "#343a40",
        }}
        multiline
        rows={5}
        rowsMax={10}
        required
        placeholder="max 180 characters"
        inputProps={{ maxLength: 180 }}
      />
      <Typography variant="h6">Website Link</Typography>
      <InputBase
        classes={styles}
        style={{
          width: "100%",
          backgroundColor: "#343a40",
          color: "#2196f3",
        }}
        required
        type="url"
        inputProps={{ maxLength: 2048 }}
      />
    </div>
  );
}
