import { useEffect, useState } from "react";
import type { Player, State } from "../PlayersListTypes";
import { fetchUsers } from "../../../api/fetchUsers";


export function usePlayers(state: State) {
    const [players, setPlayers] = useState<Player[]>([]);
    const [notification, setNotification] = useState("");

    //получение массива игроков
    useEffect(() => {
        const loadPlayers = async () => {
            try {
                const data = await fetchUsers(state.deviceId);
                const { places: players } = data;
                setPlayers(players);
            } catch (error: any) {
                if (error instanceof Error) setNotification(error.message || "Failed to load players");
            }
        };

        loadPlayers();
    }, [])

    const updatePlayer = (placeId: number, updates: Partial<Player>) => {
        setPlayers(prev =>
            prev.map(player =>
                player.place === placeId
                    ? { ...player, ...updates }
                    : player
            )
        );
    };

    return {
        players,
        updatePlayer,
        notification,
        setNotification
    }
}