import { updateBalance } from "@/api/updateBalance";
import type { Player, Operations } from "@/pages/PlayersList/PlayersListTypes";
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

    const handleBalanceChange = async (deviceId: number, inputValue: string, operation: Operations) => {
        if (!inputValue) return;

        let delta = Number(inputValue);

        if (operation === "Withdraw") {
            delta = -delta;
        }

        const response = await updateBalance(deviceId, player.place, delta);


        if (!response.ok) {
            setServerError(setErrorMessage(response.error));
            setNotification(setErrorMessage(response.error));
            setIsButtonDisabled(false);
            setInputValue("");
        } else {
            setServerError("");
            setInputValue("");
            setIsButtonDisabled(false);
        }

        updatePlayers();
    };

    return {
        handleInputChange,
        handleBalanceChange,
        inputValue,
        inputError,
        serverError,
        isButtonDisabled
    }
}