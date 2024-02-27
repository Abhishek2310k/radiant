import React, { useState } from 'react'
import './Card_landscape.scss'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Comments from '../Comments/Comments';
import Whybuy from '../Whybuy/Whybuy';

const Card_landscape = ({item}) => {


  let stars = item.stars;
  let stars_float = stars;
  stars = Math.floor(stars);


  let remaining = 5 - stars;
  let star_images = [];
  const [hidden,setHidden] = useState(1);



  for(let i = 0;i<stars;i++) {
    star_images.push(<img key={i} src='/star.png' alt='/'/>);
  }
  if (stars_float > stars) {
    star_images.push(<img key={stars} src='/half_star.png' alt='/'/>);
    remaining--;
  }
  let len = star_images.length;
  for(let i = 0;i<remaining;i++) 
    star_images.push(<img key={len + i} src='/empty_star.png' alt='/'/>);

  const handleClick = () => {
    if(hidden === 1) setHidden(0);
    else setHidden(1);
  }

  const Highlight = () => {
    if (item.bestOffer === 1) {
      return (<div className='highlight'>
        <img src='/trophy.png' alt='/'/>
        <span>Best Offer</span>
      </div>);
    }
    else if (item.bestValue === 1) {
      return (<div className='highlight'>
        <img src='/diamond.png' alt='/'/>
        <span>Best Value</span>
      </div>);
    }
  }


  return (
    <div className='card_landscape'>
        <div className='col1'>
          <div className='centering'>
            <img src='/desktop1.png' alt='/'/>
            <span>{item.name}</span>
          </div>
        </div>
        <div className='col2'>
          <div>{item.desc1_bold} {item.desc1}</div>
          <div className='discount'>{item.off === "" ? <></> : <span>{item.off} % Off</span>}</div>
          <div className='main_highlights'>
            <h3> Main highlights</h3>
            <div>{item.desc2}</div>
            <Comments lst={item.comments}/>
            <Whybuy lst={item.why_buy}/>
          </div>
          <div className='showmore' onClick={()=>handleClick()}>
            {hidden === 1 ? <>
              <span>Show more</span> 
              <FaAngleDown /> 
            </>:<>
              <span>show less</span>
              <FaAngleUp/>
            </>}
              
            </div>
          <div className={hidden === 1 ? "dropdown hidden" : "dropdown displayed"}>
            <h3> Main highlights</h3>
            <div>{item.desc2}</div>
            <Comments lst={item.comments}/>
            <Whybuy lst={item.why_buy}/>
          </div>
          <div className={hidden === 1 ? "extra hidden" : "extra displayed"}>
            Set screen size to 477px. Here We can display what ever extra information we want with greater screen size it is not showing anything but for smaller screen sizes the main highlights part will be displayed here
          </div>
        </div>
        <div className='col3'>
          <div className='ratings'>
            <span>{item.rating}</span>
            <span style={{fontSize:"14px"}}>{item.main_review}</span>
            <div className='stars'>
              {star_images}
            </div>
          </div>
          <button type='button'>
            View
          </button>
        </div>
        <div className='index'>
          <span>{item.id}</span>
        </div>
        <Highlight/>
    </div>
  )
}

export default Card_landscape