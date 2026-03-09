import { useLocation } from "react-router-dom"
import type { Player } from "./PlayersListTypes";
import { usePlayers } from "./hooks/usePlayers";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard";
import { Notification } from "../../components/Notification";



//отображение списка пользователей 
export function PlayersList() {
    const { state } = useLocation();
    const { players,
        updatePlayer,
        notification,
        setNotification } = usePlayers(state);

    return (
        <div className="px-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">{`Device ${state.deviceName} players`} </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                {players.map((player: Player) =>
                    <li key={player.place} className="py-4 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)] flex flex-col gap-5">
                        <PlayerCard
                            player={player}
                            deviceId={state.deviceId}
                            updatePlayer={updatePlayer}
                            setNotification={setNotification}
                        />
                    </li>)}
            </ul>
            {notification && <Notification notification={notification} onClose={() => setNotification("")}></Notification>}
        </div >
    )
}


