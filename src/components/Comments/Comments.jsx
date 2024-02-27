import React from 'react'
import './Comments.scss'
const Comments = (props) => {
    const lst = props.lst;
    console.log(lst);
  return (
    <div>
        {lst.length === 0 ? <></>:
        <div className='comments'>
            <ul>
                {lst.map((item,index)=>(
                    <li key={index}>
                        <div className='rating'>{item.rating}</div>
                        <div className='comment'>{item.comment}</div>
                    </li>
                ))}
            </ul>
        </div>
        }
    </div>
  )
}

export default Comments