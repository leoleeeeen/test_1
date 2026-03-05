//получение списка пользователей
export default async function fetchUsers(deviceId: number) {
    try {
        const res = await fetch(`/api/v1/a/devices/${deviceId}/`);
        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}


