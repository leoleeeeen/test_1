import { useTranslation } from "react-i18next";
import type { Player } from "./PlayersListTypes";
import { usePlayers } from "./hooks/usePlayers";
import { PlayerCard } from "@/components/PlayerCard/PlayerCard";
import { useLocation } from "react-router-dom";


//отображение списка пользователей 
export function PlayersList() {
    const { t } = useTranslation("players");
    const { state } = useLocation();

    const {
        players,
        updatePlayers } = usePlayers(state);

    return (
        <div className="px-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">{t("device_players", { deviceName: state.deviceName })} </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                {players.map((player: Player) =>
                    <PlayerCard
                        key={player.place}
                        player={player}
                        deviceId={state.deviceId}
                        updatePlayers={updatePlayers}
                    />
                )}
            </ul>
        </div >
    )
}


