import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const Home = ({ sidebarOpen }) => {
  return (
    <div className="page-container">
      <Sidebar sidebarOpen={sidebarOpen} />
      <Content></Content>
    </div>
  )
}

export default Home