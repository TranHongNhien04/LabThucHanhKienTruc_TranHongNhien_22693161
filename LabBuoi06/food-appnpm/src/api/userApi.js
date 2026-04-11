// // userApi.js
// import axios from "axios";

// const BASE_URL = "http://192.168.x.x:8081";

// export const login = (data) => {
//   return axios.post(`${BASE_URL}/login`, data);
// };

// export const register = (data) => {
//   return axios.post(`${BASE_URL}/register`, data);
// };

import axios from "axios";
import { USE_MOCK } from "../config";

const BASE_URL = "http://172.16.55.129:8081";

const mockUser = {
  id: 1,
  username: "test",
};

export const login = (data) => {
  if (USE_MOCK) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.username === "test") {
          resolve({ data: mockUser });
        } else {
          reject({ message: "Sai tài khoản" });
        }
      }, 300);
    });
  }

  return axios.post(`${BASE_URL}/api/v1/auth/login`, data);
};

export const register = (data) => {
  if (USE_MOCK) {
    return Promise.resolve({ data: mockUser });
  }

  return axios.post(`${BASE_URL}/register`, data);
};