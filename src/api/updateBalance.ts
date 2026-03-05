//запрос на изменение баланса
const API_URL = import.meta.env.VITE_API_URL;

export default async function updateBalance(deviceId: number, placeId: number, delta: number) {
    const response = await fetch(
        `${API_URL}/api/v1/a/devices/${deviceId}/place/${placeId}/update`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ delta })
        }
    );

    const data = await response.json();
    return data;
}