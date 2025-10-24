import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE==="development" ? 'http://localhost:5001/api' : "https://mern-stack-rb5jm90ly-kunnusherrys-projects.vercel.app/api",
  withCredentials: true,
});
