import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Box } from '@mui/material'
import { FavoritesProvider } from './context/FavoritesContext'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Box sx={{ backgroundColor: '#121212', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* Fallback route to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Box>
      </Router>
    </FavoritesProvider>
  )
}

export default App


