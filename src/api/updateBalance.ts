import { httpClient } from "./services";

type UpdateBalanceResponse = {
    balances: number;
    currency: string;
    device_id: number;
    place: number;
}

//запрос на изменение баланса
export async function updateBalance(deviceId: number, placeId: number, delta: number) {
    return httpClient<UpdateBalanceResponse>({
        url: `/${deviceId}/place/${placeId}/update`,
        method: "POST",
        data: { delta }
    });
}