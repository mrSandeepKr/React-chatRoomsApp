import React from 'react'
import './sidebar.css'
import Header from './Header'
import SearchBar from './SearchBar'
import ChatList from './ChatList/ChatList'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Header/>
      <SearchBar/>
      <ChatList/>
    </div>
  )
}

export default Sidebar