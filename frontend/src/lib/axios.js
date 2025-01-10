import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true,
}); // This is how we can use the same code for both development and production environments. If we're in development, we'll use the localhost URL. If we're in production, we'll use the relative URL.