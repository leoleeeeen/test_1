//получение списка девайсов
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchDevices() {
    try {
        const res = await fetch(`${API_URL}/api/v1/a/devices/`);
        if (!res.ok) {
            throw new Error("Failed to load devices");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
} 