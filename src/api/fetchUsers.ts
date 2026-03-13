import { httpClient } from "./services";

type Place = {
    balances: number;
    currency: string;
    device_id: number;
    place: number;
}

export type FetchUsersResponse = {
    places: Place[];
}

//получение списка пользователей
export async function fetchUsers(deviceId: number) {

    return httpClient<FetchUsersResponse>({
        url: `/${deviceId}/`,
        method: "GET",
    });
}


