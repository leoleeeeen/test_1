import { useEffect, useState } from "react";
import type { Player } from "../PlayersListTypes";
import { useLocation } from "react-router-dom";
import { fetchUsers, type FetchUsersResponse } from "@/api/fetchUsers";
import type { ApiResult } from "@/api/services";


export function usePlayers() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [notification, setNotification] = useState("");
    const { state } = useLocation();

    const handlePlayersResponse = (response: ApiResult<FetchUsersResponse>) => {
        if (!response.ok) {
            setPlayers([]);
            setNotification(response.error || "Failed to load players");
            return;
        }

        const { places: players } = response.data;
        setPlayers(players);
    }

    const updatePlayers = async () => {
        const response = await fetchUsers(state.deviceId);
        handlePlayersResponse(response);
    };

    //получение массива игроков
    useEffect(() => {
        const loadPlayers = async () => {
            const response = await fetchUsers(state.deviceId);
            handlePlayersResponse(response);
        };

        loadPlayers();
    }, [state.deviceId])



    return {
        state,
        players,
        updatePlayers,
        notification,
        setNotification
    }
}