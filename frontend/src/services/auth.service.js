// This service uses Axios for HTTP requests and Local storage for user information and JWT
// Register() - POST req {username, email, password}
// Login() -  POST { username, password } & save JWT to local storage
// Logout() - removes JWT from local storage

import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const register = (username, email, password, institute) => {
  return axios.post(API_URL + "signup/user", {
    username,
    email,
    password,
    institute
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response)
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
