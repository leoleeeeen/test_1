import { useEffect, useState } from "react";
import type { Player } from "../PlayersListTypes";
import { useLocation } from "react-router-dom";
import { fetchUsers } from "@/api/fetchUsers";


export function usePlayers() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [notification, setNotification] = useState("");
    const { state } = useLocation();

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
        state,
        players,
        updatePlayer,
        notification,
        setNotification
    }
}