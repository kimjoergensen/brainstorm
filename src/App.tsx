import { createRoot } from 'react-dom/client'
import { Board } from './components/board/Board'

const App = () => <Board />

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
