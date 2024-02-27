import React from 'react'
import './Card.scss'
const Card = () => {
  return (
    <div className='card'>
        <div className='image'>
            <img src='/desktop1.png' alt='Desktop'/>
        </div>
        <div className='content'>
            <div className='r1'>
                <button type='button'>20% off</button>
                <button type='button'>Limited Time</button>
            </div>
            <div className='r2'>
                <h3>WebBuilder 1</h3>
            </div>
            <div className='r3'>
                <span>Computer Modern Classix with mix support</span>
            </div>
            <div className='r4'>
                <span style={{color:"#5C6874",fontSize:"20px"}}>$34.96</span>
                <span style={{color:"#9FA9B3",fontSize:"14px"}}>$49.96</span>
                <span style={{color:"#EF4C5D",fontSize:"13px"}}>(20% off)</span>
            </div>
            <div className='r5'>
                <button type='button'>View Deal</button>
            </div>
        </div>
    </div>
  )
}

export default Card