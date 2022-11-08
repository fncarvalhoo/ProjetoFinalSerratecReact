import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:8080/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export const apiFile = axios.create({
    baseURL:"http://localhost:8080/",
    headers: {
        "Content-Type": "multipart/form-data",
    }
})