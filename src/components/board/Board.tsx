import { useState } from 'react'
import * as styles from './board.module.scss'

export const Board = () => {
  const [playerTiles, setPlayerTiles] = useState<{ position: number }[]>([
    { position: 1 },
    { position: 2 },
    { position: 3 },
    { position: 4 },
    { position: 5 },
    { position: 6 },
  ])

  const [opponentTiles, setOpponentTiles] = useState<{ position: number }[]>([
    { position: 1 },
    { position: 2 },
    { position: 3 },
    { position: 4 },
    { position: 5 },
    { position: 6 },
  ])

  return (
    <div className={styles.board}>
      <div className={styles.opponent}>
        {opponentTiles.map((tile) => (
          <div className={styles.tile} key={tile.position}>
            tile {tile.position}
          </div>
        ))}
      </div>

      <div className={styles.player}>
        {playerTiles.map((tile) => (
          <div className={styles.tile} key={tile.position}>
            tile {tile.position}
          </div>
        ))}
      </div>
    </div>
  )
}
