import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

http.interceptors.request.use(function (config) {
    config.headers.authorization = `BEARER ${localStorage.getItem("token")}`;
    return config;
});

http.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 401 && location.pathname !== "/login" && location.pathname !== "/register") {
            localStorage.removeItem("token");
            window.location.replace("/login");
        }

        return Promise.reject(error);
    }
)

export function createUser(data) {
    return http.post("/users", data)
}

export const createRoutine = async (routineData) => {
    try {
        const response = await http.post('/api/routines', routineData);
        return response;
    } catch (error) {
        console.error('Error creating routine:', error);
        throw error;
    }
};

export function createSubscription(routine) {
    return http.post("/subscriptions", { routine })
}

export function removeSubscription(routineId) {
    return http.delete(`/subscriptions/${routineId}`);
}

export function checkSubscription(routineId) {
    return http.get(`/subscriptions/check/${routineId}`);
}


export function login(data) {
    return http.post("/login", data).then((response) => {
        localStorage.setItem("token", response.data.accessToken);

        return response;
    })
}

export function getProfile() {
    return http.get("/profile");
}

export function getAllCoaches() {
    return http.get("/coaches")
}

export function getCoachById(id) {
    return http.get(`/coach/${id}`)
}
export function getGyms(params) {
    return http.get("/gyms", { params });
}

export function getRoutines(params) {
    return http.get("/routines", { params });
}

export function getRoutine(id) {
    return http.get(`/routines/${id}`);
}

export function getExercise(params) {
    return http.get("/exercises", { params });
}

export const createExercise = async (data) => {
    try {
        const response = await http.post("/exercises", data);
        return response;
    } catch (error) {
        console.error('Error creating exercise:', error);
        throw error;
    }
};


export function myRoutines() {
    return http.get("/myroutines")
}

export function logout() {
    localStorage.removeItem("token");
}