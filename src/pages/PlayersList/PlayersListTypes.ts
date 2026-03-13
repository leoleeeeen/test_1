//тип пользователя
export type Player = {
    place: number;
    balances: number;
}

//тип получаемого state из DeviceList
export type State = {
    deviceName: string;
    deviceId: number;
}
