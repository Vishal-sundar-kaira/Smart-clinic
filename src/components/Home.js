
import React from 'react'
import finalimage from "../assets/img/finalimage.jpeg"
import Projects from './Projects';
import NavBar from '../components/NavBar'
const Home = () => {
  return (
    <div>
      <NavBar />
      <img className='finalimage' src={finalimage} alt=''></img>       
      <Projects />
    </div>
  )
}

export default Home
