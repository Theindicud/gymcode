import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

export function createUser(data) {
    return http.post("/users", data)
}

export function login(data) {
    return http.post("/login", data)
}