import React from 'react'
import './components.css'

function Navbar() {
  return (
    <nav className='nav-container'>
      <div className='search'>
        <i class="ri-search-line"></i>
        <input
          type='text'
          placeholder='Search.... '
          style={{ height: '50%', width: '100%', outline: 'none', border: 'none', fontFamily: 'Poppins', backgroundColor: 'rgb(241 245 249)'}} />
      </div>
      <div className='nav-menu-container'>
        <i class="ri-notification-3-line"></i>
        <i class="ri-chat-4-line"></i>
        <div className='avatar'></div>
      </div>
    </nav>
  )
}

export default Navbar