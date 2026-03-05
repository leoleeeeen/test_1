//валидация вводимой суммы
export default function amountValidator(value: string) {
    if (!value) return "";

    if (!/^[0-9.]+$/.test(value)) {
        return "You can only enter numbers";
    }

    if ((value.match(/\./g) || []).length > 1) {
        return "You can only use one point";
    }

    const decimalPart = value.split(".")[1];
    if (decimalPart && decimalPart.length > 2) {
        return "No more than 2 decimal places";
    }

    if (Number(value) <= 0) {
        return "The amount must be greater than 0";
    }

    return "";
}