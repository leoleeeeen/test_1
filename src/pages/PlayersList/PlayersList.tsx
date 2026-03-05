import { useLocation } from "react-router-dom"
import type { Player } from "./PlayersListTypes";
import usePlayers from "./hooks/usePlayers";

function PlayersList() {
    const { state } = useLocation();

    const { players, handleInputChange, handleBalanceChange } = usePlayers(state);

    return (
        <div className="px-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">{`Device ${state.deviceName} players`} </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                {players.map((player: Player) =>
                    <li key={player.place} className="py-4 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)] flex flex-col gap-5">
                        <p className="inline font-bold text-xl text-gray-800">Player {player.place}</p>
                        <p>Balance: {player.balances}</p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Enter amount"
                                className={`border-2 border-gray-300 focus:outline-none rounded-md p-2 ${player.inputErrorMessage ? "border-red-500" : ""}`}
                                onChange={(e) => handleInputChange(player.place, e.target.value)}
                                value={player.inputValue ?? ""}
                            />
                            <div className="h-5">{player.inputErrorMessage && <p className="text-red-800 text-sm">{player.inputErrorMessage}</p>}</div>
                            <div className="flex flex-col md:flex-row justify-between gap-2">
                                <button onClick={() => handleBalanceChange(state.deviceId, player.place, player.inputValue, "Deposit")} type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Deposit</button>
                                <button onClick={() => handleBalanceChange(state.deviceId, player.place, player.inputValue, "Withdraw")} type="button" className="bg-red-500 text-white px-4 py-2 rounded-md w-full">Withdraw</button>
                            </div>
                        </div>
                    </li>)}
            </ul>
        </div >
    )
}

export default PlayersList
