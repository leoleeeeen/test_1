//обработка ошибок сервера
export function setErrorMessage(error: string) {
    if (error.includes("enough")) {
        return "Balance not enough"
    }

    if (error.includes("json")) {
        return "Unsupported data format"
    }

    if (error.includes("internal")) {
        return "Internal server error"
    }

    return error.charAt(0).toUpperCase() + error.slice(1);
}