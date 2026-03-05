//тип пользователя
export type Player = {
    place: number;
    balances: number;
    inputValue: string;
    serverErrorMessage: string;
    inputErrorMessage: string;
}

//тип получаемого state из DeviceList
export type State = {
    deviceName: string;
    deviceId: number;
}

//тип операции с балансом
export type Operations = "Deposit" | "Withdraw";