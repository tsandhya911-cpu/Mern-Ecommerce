
import axios from "axios";

console.log("ENV CHECK:", import.meta.env.VITE_API_URL);  
const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// 🔐 TOKEN AUTO ADD
API.interceptors.request.use((req) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user?.token) {
        req.headers.Authorization = `Bearer ${user.token}`;
    }

    return req;
});

export default API;