import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import AuthService from "../../../services/auth.service";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(2, 0, 0),
    minWidth: 170,
  },
}));


const SignUp = (props) => {

  const classes = useStyles();

  const [institute, setInstitute] = useState("");
  const handleChange = (event) => {
    setInstitute(event.target.value);
  };

  // Set Hooks for user Registration
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(institute) // check
    setMessage("");
    setSuccessful(false);

    AuthService.register(username, email, password, institute).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => { 
        const resMessage = 
          ( error.response &&
            error.response.data &&
            error.response.data.message
          ) || error.message || error.toString();
        
        setMessage(resMessage);
        setSuccessful(false);
      }
    );
};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-label">Institute</InputLabel>
          <Select
            native
            labelId="select-label"
            id="select"
            value={institute}
            required
            onChange={handleChange}
            label="Institute"
            autoFocus
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </Select>
          {/* <FormHelperText>Required</FormHelperText> */}
        </FormControl>
        <form className={classes.form} onSubmit={handleRegister}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={onChangeUsername}
                type="text"
                autoComplete="uname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="text"
                value={email}
                onChange={onChangeEmail}
                // validations={[required, validEmail]}
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={onChangePassword}
                // validations={[required, vpassword]}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                to="/login"
                variant="body2"
                // style={{ textDecoration: "none", color: "#2196f3" }}
                className="link"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}

export default SignUp;