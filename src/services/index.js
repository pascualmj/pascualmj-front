import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_NETLIFY_FUNCTIONS_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const sendMessage = (message) => {
  return apiClient.post("/sendMessage", message);
};
