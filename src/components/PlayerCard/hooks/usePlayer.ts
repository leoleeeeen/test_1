import { useState } from "react";
import { updateBalance } from "../../../api/updateBalance";
import type { Player, Operations } from "../../../pages/PlayersList/PlayersListTypes";
import { amountValidator } from "../../../utils/amountValidator";
import { setErrorMessage } from "../../../utils/setErrorMessage";

export function usePlayer(player: Player, updatePlayer: (placeId: number, updates: Partial<Player>) => void) {
    const [inputError, setInputError] = useState("");
    const [serverError, setServerError] = useState("");

    const handleInputChange = (value: string) => {
        setServerError("");
        setInputError(amountValidator(value));

        const updates = { inputValue: value };

        updatePlayer(player.place, updates);
    };

    const handleBalanceChange = async (deviceId: number, inputValue: string, operation: Operations) => {
        if (inputError) return;

        let delta = Number(inputValue);

        if (operation === "Withdraw") {
            delta = -delta;
        }

        const data = await updateBalance(deviceId, player.place, delta);
        let updates = {};

        if (!data.balances) {
            setServerError(setErrorMessage(data.err));
            updates = { inputValue: "" }
        } else {
            setServerError("");
            updates = { balances: data.balances, inputValue: "" };
        }

        updatePlayer(player.place, updates);
    };

    return {
        handleInputChange,
        handleBalanceChange,
        inputError,
        serverError
    }
}