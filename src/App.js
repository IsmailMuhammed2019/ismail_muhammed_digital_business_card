import React from 'react'
import pic from './img/pic.jpg'
import './App.css'

const Social = () => {
  return (
    <div className='social'>
      <button>Email</button>
      <button>Linkedin</button>
    </div>
  )
}

const Intro = () => {
  return (
    <div>
      <h1>Ismail Muhammed</h1>
      <h3>IT Support Engr | DevOps Engr | Web Developer</h3>
      <p>+234-703-237-8480</p>
    </div>
  )
}

const Image = () => {
  return (
    <div className='pic'>
      <img src={pic} alt="pic" />
    </div>
    
  )
}


const InnerBox = () => {
  return (
    <div className='innerBox'>
      <Image />
      <Intro />
      <Social />

    </div>
  )
}

function App() {
  return (
    <div className='outerRectangle'>
      <InnerBox />
    </div>
  )
}

export default App

