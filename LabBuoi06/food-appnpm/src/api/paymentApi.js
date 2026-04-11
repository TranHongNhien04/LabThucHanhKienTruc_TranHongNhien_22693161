// // paymentApi.js
// import axios from "axios";

// const BASE_URL = "http://192.168.x.x:8084";

// export const payment = (data) => {
//   return axios.post(`${BASE_URL}/payments`, data);
// };

import axios from "axios";
import { USE_MOCK } from "../config";

const BASE_URL = "http://192.168.x.x:8084";

export const payment = (data) => {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            status: "PAID",
          },
        });
      }, 300);
    });
  }

  return axios.post(`${BASE_URL}/payments`, data);
};