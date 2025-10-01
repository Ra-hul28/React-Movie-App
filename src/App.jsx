import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Box } from '@mui/material'
import { FavoritesProvider } from './context/FavoritesContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FavoritesProvider>
      <Router>
        <Box sx={{ backgroundColor: '#121212', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Box>
      </Router>
    </FavoritesProvider>
  )
}

export default App

