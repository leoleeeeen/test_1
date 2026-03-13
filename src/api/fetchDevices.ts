import { httpClient } from "./services";

type FetchDevicesResponse = {
    id: number;
    name: string;
}

//получение списка девайсов
export async function fetchDevices() {

    return httpClient<FetchDevicesResponse[]>({
        url: `/`,
        method: "GET",
    });
} 