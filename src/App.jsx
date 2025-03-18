import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MagicSparkles from './components/MagicSparkles'
import "./index.css"

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    // Set page as loaded after a short delay to trigger animations
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Router>
      <div className={`app ${pageLoaded ? 'loaded' : ''}`}>
        <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home sidebarOpen={sidebarOpen} />} />
        </Routes>
        <MagicSparkles />
      </div>
    </Router>
  )
}

export default App