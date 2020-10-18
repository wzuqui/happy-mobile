import axios from "axios";

const api = axios.create({
  baseURL:
    "https://itapema-happy-backend.herokuapp.com",
});

export default api;
