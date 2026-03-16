import type { Player } from "@/pages/PlayersList/PlayersListTypes"

export type PlayerCardProps = {
    player: Player,
    deviceId: number,
    updatePlayers: () => void,
}