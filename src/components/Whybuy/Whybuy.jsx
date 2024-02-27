import React from 'react'
import './Whybuy.scss'
const Whybuy = (props) => {
    const lst = props.lst;
  return (
    <div>
    {lst.length === 0 ? <></>:
        <div className='why_buy'>
            <span>Why we love it</span>
            <ul>
                {lst.map((item,index)=>(
                    <li key={index}>
                        <div className='tick'>
                            <img src='/tick.png' alt='/'/>
                        </div>
                        <div className='content'>
                            {item}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    }
    </div>
  )
}

export default Whybuy