import React, { useState } from "react";
import { InputBase, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";

const useStyles = makeStyles({
  title: {
    marginTop: "1em",
    fontWeight: 300,
    fontSize: "2em",
  },
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

      <Typography variant="h6" className={classes.title}>
        Institution Name
      </Typography>
      <InputBase
        classes={styles}
        style={{
          width: "100%",
          // color: "#fff",
          backgroundColor: "#343a40",
        }}
        placeholder="max characters: 35"
        required
        inputProps={{ maxLength: 35 }}
      />

      <Typography variant="h6" className={classes.title}>
        Institution Description
      </Typography>
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
        placeholder="max characters: 180"
        inputProps={{ maxLength: 180 }}
      />
      <Typography variant="h6" className={classes.title}>
        Website Link
      </Typography>
      <InputBase
        classes={styles}
        style={{
          width: "100%",
          backgroundColor: "#343a40",
          color: "#2196f3",
        }}
        inputProps={{ maxLength: 2048 }}
      />
    </div>
  );
}
