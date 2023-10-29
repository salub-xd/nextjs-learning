import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
    const resultData = await httpAxios.post('/api/tasks', task).then((response) => {
        response.data
    });
    return resultData;
}

export async function showTask() {
    const resultData = await httpAxios.get('/api/users/653795e7b7cf5f5490533351/tasks').then((response) => {
        response.data
    });
    console.log(resultData)
    return resultData;
}