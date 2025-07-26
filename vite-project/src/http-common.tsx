import axios from "axios";

export default axios.create({
  baseURL: "https://work-hours-converter.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
