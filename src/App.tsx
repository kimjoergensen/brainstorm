import { createRoot } from 'react-dom/client'
import { GameBoard } from './components/game-board/GameBoard'

const App: React.FC = () => <GameBoard />

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
