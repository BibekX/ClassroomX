import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Avatar,
  Button,
  InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Profile.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    textAlign: "center",
  },
  large: {
    width: theme.spacing(28),
    height: theme.spacing(28),
    border: "1px solid #00adb5",
  },
}));

function Profile() {
  const classes = useStyles();
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    event.target.files[0] &&
      setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <Container className={classes.root}>
      <Typography align="center" variant="h2">
        My Profile
      </Typography>
      <Grid container justify="center" className="header">
        <Avatar
          src="./img/profile/1.jpg"
          alt="Profile"
          className={classes.large}
        />
      </Grid>
      <Grid container justify="center" className="upload-button">
        <Button variant="contained" component="label">
          <input type="file" onChange={handleChange} hidden />
          Upload Photo
        </Button>
      </Grid>
      <Typography style={{ color: "#fff" }} variant="h6" align="center">
        USERNAME
      </Typography>
      <Grid container justify="center" style={{ paddingBottom: "1em" }}>
        <InputBase
          value="Keanu07"
          style={{
            backgroundColor: "#4a4e69",
            color: "#9a8c98",
            paddingLeft: "10px",
            border: "1px solid #6d6875",
            margin: "0 auto",
          }}
          disabled
        />
      </Grid>
      <Typography variant="h6" style={{ color: "#fff" }} align="center">
        Nickname
      </Typography>
      <Grid container justify="center">
        <InputBase
          value="Keeaanuu"
          style={{
            backgroundColor: "#121212",
            color: "#fff",
            paddingLeft: "10px",
            border: "1px solid #6d6875",
            margin: "0 auto",
          }}
        />
      </Grid>
      <div style={{ justifyContent: "center" }}>
        <Button variant="contained" color="primary" style={{ margin: "2em 0" }}>
          Update
        </Button>
      </div>
    </Container>
  );
}

export default Profile;
