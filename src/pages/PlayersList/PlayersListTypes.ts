export type Player = {
    place: number;
    balances: number;
    inputValue: string;
    errorMessage: string;
    inputErrorMessage: string;
}

export type Operations = "Deposit" | "Withdraw";