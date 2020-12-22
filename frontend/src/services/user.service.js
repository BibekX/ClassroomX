import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getPublicContent = () => {
  return axios.get(API_URL);
};

const getUserProfile = () => {
  return axios.get(API_URL + "profile", { headers: authHeader() });
};

const getUserClassroom = () => {
  return axios.get(API_URL + "myclass", { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserProfile,
  getUserClassroom,
};