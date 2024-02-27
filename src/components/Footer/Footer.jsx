import React from 'react'
import './Footer.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='part'>
            <h3>Categories</h3>
            <span>Web Builder</span>
            <span>Hosting</span>
            <span>Data Center</span>
            <span>Robotic-Automation</span>
            <span></span>
        </div>
        <div className='part'>
            <h3>Contact</h3>
            <span>Contact</span>
            <span>Proivacy Policy</span>
            <span>Terms of Services</span>
            <span>Categories</span>
            <span></span>
        </div>
        <div className='part'>
            <h3></h3>
            <span></span>
            <span></span>
            <span className='right'>United States <KeyboardArrowDownIcon/></span>
        </div>
    </div>
  )
}

export default Footer