import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://movie-flex-backend.onrender.com/api/",
});

export default axiosInstance;
