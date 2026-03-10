import { usePlayer } from "./hooks/usePlayer";
import type { PlayerCardProps } from "./PlayerCardTypes";

export function PlayerCard({
    player,
    deviceId,
    updatePlayer,
    setNotification
}: PlayerCardProps) {
    const {
        handleInputChange,
        handleBalanceChange,
        inputError,
        isButtonDisabled
    } = usePlayer(player, updatePlayer, setNotification);

    return (
        <>
            <p className="inline font-bold text-xl text-gray-800">Player {player.place}</p>
            <p>Balance: {player.balances}</p>
            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Enter amount"
                    className={`border-2 border-gray-300 focus:outline-none rounded-md p-2 ${inputError ? "border-red-500" : ""}`}
                    onChange={(e) => handleInputChange(e.target.value)}
                    value={player.inputValue ?? ""}
                    maxLength={10}
                />
                <div className="h-5">
                    {inputError && <p className="text-red-800 text-sm">{inputError}</p>}
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    <button
                        onClick={() => handleBalanceChange(deviceId, player.inputValue, "Deposit")}
                        type="button"
                        className={`bg-blue-500 text-white px-4 py-2 rounded-md w-full cursor-pointer ${isButtonDisabled && "opacity-75"}`}
                        disabled={isButtonDisabled}
                    >
                        Deposit
                    </button>
                    <button
                        onClick={() => handleBalanceChange(deviceId, player.inputValue, "Withdraw")}
                        type="button"
                        className={`bg-red-500 text-white px-4 py-2 rounded-md w-full cursor-pointer ${isButtonDisabled && "opacity-75"}`}
                        disabled={isButtonDisabled}
                    >
                        Withdraw
                    </button>
                </div>
            </div>
        </>
    )
}


