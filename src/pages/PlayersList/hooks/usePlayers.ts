import { useEffect, useState } from "react";
import type { Operations, Player, State } from "../PlayersListTypes";
import fetchUsers from "../../../api/fetchUsers";
import updateBalance from "../../../api/updateBalance";
import amountValidator from "../../../utils/amountValidator";

export default function usePlayers(state: State) {
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        fetchUsers(state.deviceId).then((data) => {
            const { places: players } = data;
            setPlayers(players);
        })
    }, [])

    const handleInputChange = (placeId: number, value: string) => {
        const error = amountValidator(value);

        setPlayers(prev =>
            prev.map(player =>
                player.place === placeId
                    ? { ...player, inputValue: value, inputErrorMessage: error }
                    : player
            )
        );
    };

    const handleBalanceChange = async (deviceId: number, placeId: number, inputValue: string, operation: Operations) => {
        if (players.find((player) => player.place === placeId)?.inputErrorMessage) return;

        let delta = Number(inputValue);

        if (operation === "Deposit") {
            delta = delta;
        } else {
            delta = -delta;
        }

        const data = await updateBalance(deviceId, placeId, delta);

        if (!data.balances) {
            setPlayers(prev =>
                prev.map(player =>
                    player.place === placeId
                        ? { ...player, errorMessage: data.err, inputValue: "" }
                        : player
                )
            );
        } else {
            setPlayers(prev =>
                prev.map(player =>
                    player.place === placeId
                        ? { ...player, balances: data.balances, errorMessage: "", inputValue: "" }
                        : player
                )
            );
        }
    };

    return {
        players,
        handleBalanceChange,
        handleInputChange
    }
}