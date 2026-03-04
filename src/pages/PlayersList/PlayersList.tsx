import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import type { Player } from "./PlayersListTypes";
import fetchUsers from "../../fetchData/fetchUsers";

function PlayersList() {
    const { state } = useLocation();
    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {
        fetchUsers(state.deviceId).then((data) => {
            const { places: players } = data;
            setPlayers(players);
        })
    }, [])

    const handleInputChange = (placeId: number, value: string) => {
        setPlayers(prev =>
            prev.map(player =>
                player.place === placeId
                    ? { ...player, inputValue: value }
                    : player
            )
        );
    };

    const handleBalanceChange = async (deviceId: number, placeId: number, delta: number) => {
        try {
            const response = await fetch(
                `/api/v1/a/devices/${deviceId}/place/${placeId}/update`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ delta })
                }
            );

            const data = await response.json();

            setPlayers(prev =>
                prev.map(player =>
                    player.place === placeId
                        ? { ...player, balances: data.balances, inputValue: "" }
                        : player
                )
            );

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="px-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">{`Device ${state.deviceName} players`} </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                {players.map((player: Player) =>
                    <li key={player.place} className="py-4 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)] flex flex-col gap-2">
                        <p className="inline font-bold text-xl text-gray-800">Player {player.place}</p>
                        <p>Balance: {player.balances}</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Enter amount"
                                className="border-2 border-gray-300 rounded-md p-2"
                                onChange={(e) => handleInputChange(player.place, e.target.value)}
                                value={player.inputValue}
                            />
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <button onClick={() => handleBalanceChange(state.deviceId, player.place, Number(player.inputValue))} type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Deposit</button>
                                <button onClick={() => handleBalanceChange(state.deviceId, player.place, -Number(player.inputValue))} type="button" className="bg-red-500 text-white px-4 py-2 rounded-md w-full">Withdraw</button>
                            </div>
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}

export default PlayersList
