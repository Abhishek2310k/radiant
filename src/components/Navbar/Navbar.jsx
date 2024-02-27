import React from 'react'
import './Navbar.scss'
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
const Navbar = () => {
  const [hidden, setHidden] = useState(1);
  return (
    <div className='navbar'>
        <div className='content'>
          <div className='menu' onClick={()=>hidden === 1 ? setHidden(0) : setHidden(1)}>
                <IoMdMenu/>
              </div>
              <div className='input'>
                  <CiSearch className='search_icon'/>
                  <input type='text'></input>
              </div>
              <span>WebsiteBuilders</span>
              <span>Categories</span>
              <span>Today's deals</span>
          </div>
        <div className={hidden === 1 ? "hidden" : "shown"}>
          <span>Categories</span>
          <span>WebsiteBuilders</span>
          <span>Today's deals</span>
        </div>
    </div>
  )
}

export default Navbar