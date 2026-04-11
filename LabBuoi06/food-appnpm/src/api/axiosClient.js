import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://172.16.55.129", // sẽ override khi gọi
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;