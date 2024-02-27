import React from 'react'
import './Home.scss'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Signup from '../components/Signup/Signup'
import Related_deals from '../components/Related_deals/Related_deals'
import Card_landscape from '../components/Card_landscape/Card_landscape'
import {data} from "../data";
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <div className='main'>
          {data.map((item,index)=>(<Card_landscape item={item} key={index}/>))}
        </div>
        <Related_deals/>
        <Signup/>
        <Footer/>
    </div>
  )
}

export default Home