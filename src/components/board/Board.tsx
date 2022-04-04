import { useState } from 'react'
import * as styles from './board.module.scss'

export const Board = () => {
  const [tiles, setTiles] = useState<{ position: number }[]>([
    { position: 0 },
    { position: 1 },
    { position: 2 },
    { position: 3 },
  ])

  return (
    <div className={styles.board}>
      {tiles.map((tile) => (
        <div key={tile.position}>tile {tile.position}</div>
      ))}
    </div>
  )
}
