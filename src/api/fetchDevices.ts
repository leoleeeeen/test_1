export default async function fetchDevices() {
    try {
        const res = await fetch("/api/v1/a/devices/");
        if (!res.ok) {
            throw new Error("Failed to fetch devices");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
} 