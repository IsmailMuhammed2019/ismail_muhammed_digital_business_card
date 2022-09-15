import React from 'react'
import pic from './img/pic.jpg'
import './App.css'


const Contact = () => {
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
    <div className="innerBox">
      <Image />
      {/* <Intro />
      <Contact />
      <SmallText />
      <Social /> */}
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <InnerBox />
    </div>
  )
}

export default App
