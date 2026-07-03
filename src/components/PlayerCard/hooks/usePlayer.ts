import { updateBalance } from "@/api/updateBalance";
import { useNotification } from "@/context/NotificationContext";
import type { Player } from "@/pages/PlayersList/PlayersListTypes";
import { amountValidator } from "@/utils/amountValidator";
import { setErrorMessage } from "@/utils/setErrorMessage";
import { useState } from "react";


export function usePlayer(
    player: Player,
    updatePlayers: () => void) {


    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { showNotification } = useNotification();

    const handleInputChange = (value: string) => {
        const inputError = amountValidator(value);
        setInputError(inputError);

        if (!inputError) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
        setInputValue(value);
    };


    const handleChangeBalance = async (deviceId: number, delta: number) => {
        if (!delta) return;

        const response = await updateBalance(deviceId, player.place, delta);

        if (!response.ok) {
            showNotification(setErrorMessage(response.error));
        }

        setInputValue("");
        updatePlayers();
    }

    const handleDeposit = async (deviceId: number, inputValue: string) => {
        handleChangeBalance(deviceId, Number(inputValue));
    };

    const handleWithdraw = async (deviceId: number, inputValue: string) => {
        handleChangeBalance(deviceId, -Number(inputValue));
    };

    return {
        handleInputChange,
        handleDeposit,
        handleWithdraw,
        inputValue,
        inputError,
        isButtonDisabled
    }
}