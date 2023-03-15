import React from 'react'
import './Sidebar.scss'

import Search from '../Search/Search'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
          <div className="logo_img"></div>
          <div className="logo_profile_details">
            <p className="name">John Doe</p>
            <p className="roleName">Seller</p>
          </div>
      </div>
      <div className="center">
        <Search />
      </div>
      <div className="bottom">
        log out
      </div>
    </div>
  )
}

export default Sidebar