import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
      <Route path="/" element={<Landing></Landing>} ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
