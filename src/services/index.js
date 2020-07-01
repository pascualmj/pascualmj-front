import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.pascualmj.dev/.netlify/functions",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const sendMessage = (message) => {
  return apiClient.post("/sendMessage", message);
};
