import { usePlayer } from "./hooks/usePlayer";
import type { PlayerCardProps } from "./PlayerCardTypes";

export function PlayerCard({
    player,
    deviceId,
    updatePlayers,
    setNotification
}: PlayerCardProps) {
    const {
        handleInputChange,
        handleDeposit,
        handleWithdraw,
        inputValue,
        inputError,
        isButtonDisabled
    } = usePlayer(player, updatePlayers, setNotification);

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
                    value={inputValue ?? ""}
                    maxLength={10}
                />
                <div className="h-5">
                    {inputError && <p className="text-red-800 text-sm">{inputError}</p>}
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    <button
                        onClick={() => handleDeposit(deviceId, inputValue)}
                        type="button"
                        className={`px-4 py-2 rounded-md w-full 
                            ${isButtonDisabled
                                ? "opacity-40 bg-gray-300 text-black cursor-not-allowed  outline outline-gray-600"
                                : "bg-blue-500 text-white cursor-pointer"}`}
                        disabled={isButtonDisabled}
                    >
                        Deposit
                    </button>
                    <button
                        onClick={() => handleWithdraw(deviceId, inputValue)}
                        type="button"
                        className={` px-4 py-2 rounded-md w-full 
                            ${isButtonDisabled
                                ? "opacity-40 bg-gray-300 text-black cursor-not-allowed outline outline-gray-600"
                                : "bg-red-500 text-white cursor-pointer"}`}
                        disabled={isButtonDisabled}
                    >
                        Withdraw
                    </button>
                </div>
            </div>
        </>
    )
}


