import { updateBalance } from "@/api/updateBalance";
import type { Player, Operations } from "@/pages/PlayersList/PlayersListTypes";
import { amountValidator } from "@/utils/amountValidator";
import { setErrorMessage } from "@/utils/setErrorMessage";
import { useState, type Dispatch, type SetStateAction } from "react";


export function usePlayer(
    player: Player,
    updatePlayer: (placeId: number, updates: Partial<Player>) => void,
    setNotification: Dispatch<SetStateAction<string>>) {

    const [inputError, setInputError] = useState("");
    const [serverError, setServerError] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = (value: string) => {
        setServerError("");
        setNotification("");
        const inputError = amountValidator(value);
        setInputError(inputError);

        if (value && !inputError) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }

        const updates = { inputValue: value };

        updatePlayer(player.place, updates);
    };

    const handleBalanceChange = async (deviceId: number, inputValue: string, operation: Operations) => {
        if (inputError) return;

        let delta = Number(inputValue);

        if (operation === "Withdraw") {
            delta = -delta;
        }

        const response = await updateBalance(deviceId, player.place, delta);
        console.log(response);
        const data = response.data;
        let updates = {};

        if (!data.balances) {
            setServerError(setErrorMessage(data.err));
            setNotification(setErrorMessage(data.err));
            setIsButtonDisabled(true);
            updates = { inputValue: "" }
        } else {
            setServerError("");
            setIsButtonDisabled(true);
            updates = { balances: data.balances, inputValue: "" };
        }

        updatePlayer(player.place, updates);
    };

    return {
        handleInputChange,
        handleBalanceChange,
        inputError,
        serverError,
        isButtonDisabled
    }
}