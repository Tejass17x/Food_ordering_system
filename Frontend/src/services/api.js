import axios from "axios";

const API = axios.create({
  baseURL: "https://food-ordering-system-y0qw.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("API URL =>", API.defaults.baseURL);

export default API;