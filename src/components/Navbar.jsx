import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div className="navbar">
        <header>
            <div className="logo">
                <h1 className='logo-title'>Harry Potter Blog</h1>
            </div>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                {sidebarOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    </div>
  )
}

export default Navbar