import { httpService } from "./httpService";

//получение списка девайсов
export async function fetchDevices() {
    try {
        const response = await httpService.get(`/`);
        return response;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
} 