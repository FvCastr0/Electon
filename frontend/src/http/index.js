import axios from "axios";

const api = axios.create({
  baseURL: 'https://apielecton.vercel.app',
})

export default api;
