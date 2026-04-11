// // foodApi.js
// import axios from "axios";

// const BASE_URL = "http://192.168.x.x:8082";

// export const getFoods = () => {
//   return axios.get(`${BASE_URL}/foods`);
// };

// import axios from "axios";
// import { USE_MOCK } from "../config";

// // mock data
// const mockFoods = [
//   { id: 1, name: "Cơm gà", price: 30000 },
//   { id: 2, name: "Bún bò", price: 40000 },
// ];

// const BASE_URL = "http://192.168.x.x:8082";

// export const getFoods = () => {
//   if (USE_MOCK) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ data: mockFoods });
//       }, 300);
//     });
//   }

//   return axios.get(`${BASE_URL}/foods`);
// };

import axios from "axios";

// Base URL Food Service
const BASE_URL = "http://172.16.53.213:8082";

export const getFoods = () => {
  return axios.get(`${BASE_URL}/foods`);
};

export const getFoodById = (id) => {
  return axios.get(`${BASE_URL}/foods/${id}`);
};

// Thêm món ăn (multipart/form-data)
export const addFood = (formData) => {
  return axios.post(`${BASE_URL}/foods`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Cập nhật món ăn
export const updateFood = (id, food) => {
  return axios.put(`${BASE_URL}/foods/${id}`, food);
};

// Xóa món ăn
export const deleteFood = (id) => {
  return axios.delete(`${BASE_URL}/foods/${id}`);
};