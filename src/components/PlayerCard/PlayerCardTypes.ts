import type { Player } from "@/pages/PlayersList/PlayersListTypes"
import type { Dispatch, SetStateAction } from "react"

export type PlayerCardProps = {
    player: Player,
    deviceId: number,
    updatePlayer: (placeId: number, updates: Partial<Player>) => void,
    setNotification: Dispatch<SetStateAction<string>>
}