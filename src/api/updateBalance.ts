import { httpService } from "./httpService";

//запрос на изменение баланса
export async function updateBalance(deviceId: number, placeId: number, delta: number) {
    try {
        const response = await httpService.post(
            `/${deviceId}/place/${placeId}/update`,
            { delta })

        return response;
    } catch (error: any) {
        const serverError = error.response;

        return serverError;
    }
}