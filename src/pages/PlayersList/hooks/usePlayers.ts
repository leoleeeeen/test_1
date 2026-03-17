import { useCallback, useEffect, useState } from "react";
import type { Player } from "../PlayersListTypes";
import { useLocation } from "react-router-dom";
import { fetchUsers, type FetchUsersResponse } from "@/api/fetchUsers";
import type { ApiResult } from "@/api/services";
import { useNotification } from "@/context/NotificationContext";
import { useTranslation } from "react-i18next";


export function usePlayers() {
    const [players, setPlayers] = useState<Player[]>([]);
    const { showNotification } = useNotification();
    const { state } = useLocation();
    const { t } = useTranslation("players");


    const handlePlayersResponse = useCallback((response: ApiResult<FetchUsersResponse>) => {
        if (!response.ok) {
            setPlayers([]);
            showNotification(response.error || "Failed to load players")
            return;
        }

        const { places: players } = response.data;
        setPlayers(players);
    }, [showNotification]);

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
    }, [state.deviceId, handlePlayersResponse])


    return {
        state,
        players,
        updatePlayers,
        t
    }
}