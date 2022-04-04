import { useState } from 'react'
import * as styles from './board.module.scss'

export const Board = () => {
  const [playerTiles] = useState<{ position: number }[]>(mock)
  const [playerBackrow] = useState<{ position: number }[]>(mock)
  const [opponentTiles] = useState<{ position: number }[]>(mock)
  const [opponentBackrow] = useState<{ position: number }[]>(mock)

  return (
    <div className={styles.board}>
      <div className={styles.opponent}>
        <div className={styles.hand}></div>

        <div className={styles.backrow}>
          {opponentBackrow.map((backrow) => (
            <div className={styles.tile} key={backrow.position}>
              backrow {backrow.position}
            </div>
          ))}
        </div>

        <div className={styles.field}>
          {opponentTiles.map((tile) => (
            <div className={styles.tile} key={tile.position}>
              tile {tile.position}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.player}>
        <div className={styles.field}>
          {opponentTiles.map((tile) => (
            <div className={styles.tile} key={tile.position}>
              tile {tile.position}
            </div>
          ))}
        </div>

        <div className={styles.backrow}>
          {opponentBackrow.map((backrow) => (
            <div className={styles.tile} key={backrow.position}>
              backrow {backrow.position}
            </div>
          ))}
        </div>

        <div className={styles.hand}></div>
      </div>
    </div>
  )
}

const mock = [{ position: 1 }, { position: 2 }, { position: 3 }, { position: 4 }, { position: 5 }, { position: 6 }]
