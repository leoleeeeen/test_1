import type { Player } from "@/pages/PlayersList/PlayersListTypes"
import type { Dispatch, SetStateAction } from "react"

export type PlayerCardProps = {
    player: Player,
    deviceId: number,
    updatePlayers: () => void,
    setNotification: Dispatch<SetStateAction<string>>
}