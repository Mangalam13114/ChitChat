import axios from 'axios';

const api = axios.create({
    baseURL: "https://chitchat-ked0.onrender.com/api",
    withCredentials: true,
})

export default api;