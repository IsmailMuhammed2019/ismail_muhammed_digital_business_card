import React from 'react'
import pic from './img/pic.jpg'
import './App.css'



const Image = () => {
  return (
    <div>
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
