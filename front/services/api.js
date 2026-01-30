import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3001",
  timeout: 5000,
  headers: {
    "X-Client-Plataform": "Web-Application",
    "Content-Type": "application/json",
  },
});

export default api;
