export default async function updateBalance(deviceId: number, placeId: number, delta: number) {
    const response = await fetch(
        `/api/v1/a/devices/${deviceId}/place/${placeId}/update`,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ delta })
        }
    );

    const data = await response.json();
    return data;
}