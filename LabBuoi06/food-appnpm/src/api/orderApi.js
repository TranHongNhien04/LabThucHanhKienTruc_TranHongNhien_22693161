// // orderApi.js
// import axios from "axios";

// const BASE_URL = "http://192.168.x.x:8083";

// export const createOrder = (data) => {
//   return axios.post(`${BASE_URL}/orders`, data);
// };

import axios from "axios";
import { USE_MOCK } from "../config";

const BASE_URL = "http://192.168.x.x:8083";

export const createOrder = (data) => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            id: 123,
            ...data,
            status: "CREATED",
          },
        });
      }, 300);
    });
  }

  return axios.post(`${BASE_URL}/orders`, data);
};