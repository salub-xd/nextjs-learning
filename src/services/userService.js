import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
    const resultData = await httpAxios.post('/api/users', user).then((response) => response.data);
    return resultData;
}

export async function login(user) {
    const resultData = await httpAxios.post('/api/login', user).then((response) => response.data);
    return resultData;
}

export async function currentUser() {
    const resultData = await httpAxios.get('/api/current').then((response) => response.data);
    return resultData;
}

export async function logout() {
    const resultData = await httpAxios.post('/api/logout').then((response) => response.data);
    return resultData;
}