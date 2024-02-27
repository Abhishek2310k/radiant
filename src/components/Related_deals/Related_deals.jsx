import React from 'react'
import './Related_deals.scss'
import Card from '../Card/Card'
const Related_deals = () => {
  return (
    <>
    <div className='heading'>
      <h1>Related deals you might like for</h1>
    </div>
    <div className='related_deals'>
        <div className='content'>
            <div className='cards'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Related_deals