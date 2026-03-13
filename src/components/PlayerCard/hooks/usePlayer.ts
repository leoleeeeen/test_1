import type { ApiResult } from "@/api/services";
import { updateBalance, type UpdateBalanceResponse } from "@/api/updateBalance";
import type { Player } from "@/pages/PlayersList/PlayersListTypes";
import { amountValidator } from "@/utils/amountValidator";
import { setErrorMessage } from "@/utils/setErrorMessage";
import { useState, type Dispatch, type SetStateAction } from "react";


export function usePlayer(
    player: Player,
    updatePlayers: () => void,
    setNotification: Dispatch<SetStateAction<string>>) {

    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState("");
    const [serverError, setServerError] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleInputChange = (value: string) => {
        setServerError("");
        setNotification("");
        const inputError = amountValidator(value);
        setInputError(inputError);

        if (!inputError) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
        setInputValue(value);
    };

    const handleBalanceChangeResponse = (response: ApiResult<UpdateBalanceResponse>) => {
        if (!response.ok) {
            setNotification(setErrorMessage(response.error));
            setServerError(setErrorMessage(response.error));
            setInputValue("");
            setIsButtonDisabled(false);
        } else {
            setServerError("");
            setInputValue("");
            setIsButtonDisabled(false);
        }

        updatePlayers();
    }

    const handleDeposit = async (deviceId: number, inputValue: string) => {
        if (!inputValue) return;

        const delta = Number(inputValue);

        const response = await updateBalance(deviceId, player.place, delta);

        handleBalanceChangeResponse(response);
    };

    const handleWithdraw = async (deviceId: number, inputValue: string) => {
        if (!inputValue) return;

        const delta = -Number(inputValue);

        const response = await updateBalance(deviceId, player.place, delta);

        handleBalanceChangeResponse(response);
    };

    return {
        handleInputChange,
        handleDeposit,
        handleWithdraw,
        inputValue,
        inputError,
        serverError,
        isButtonDisabled
    }
}