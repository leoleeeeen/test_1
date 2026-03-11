import { httpService } from "./httpService";

//получение списка пользователей
export async function fetchUsers(deviceId: number) {
    try {
        const response = await httpService.get(`/${deviceId}/`)
        return response;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}


