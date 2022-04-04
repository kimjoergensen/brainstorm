import React from 'react'
import { createRoot } from 'react-dom/client'

const App: React.FC = () => <h1>App works!</h1>

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
