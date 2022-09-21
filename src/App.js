import React from 'react'
import pic from './img/pic.jpg'
import star from './img/star.png'
import './App.css'


// const Contact = () => {
//   return (
//     <div className='contact'>
//       <div className=''>Email</div>

//     </div>
//   )
// }

// const Intro = () => {
//   return (
//     <div>
//       <h1>Ismail Muhammed</h1>
//       <h3>IT Support Engr | DevOps Engr | Web Developer</h3>
//       <p>+234-703-237-8480</p>
//     </div>
//   )
// }

// const Image = () => {
//   return (
//     <div className='pic'>
//       <img src={pic} alt="pic" />
//     </div>
    
//   )
// }


// const InnerBox = () => {
//   return (
//     <div className='innerBox'>
//       <Image />
//       <Intro />
//       {/* 
//       <Contact />
//       <SmallText />
//       <Social /> */}
//     </div>
//   )
// }



// image holder

const Image = () => {
  return (
    <div className="propic">
    <img src={pic} alt="my pic" />
    </div>
  )
}
// info

const Info = () => {
  return (
    <div className='start'>
      <img src={star} alt="star image" />
      <h2>Ismail Muhammed</h2>
    </div>
  )
}

//contacts
const Contacts = () => {
  return (
    <div className="contacts">
      <h3>+234 703 237 8480</h3>
      <h3>ismailmuhammed2019@gmail.com</h3>
    </div>
  )
}


function App() {
  return (
    <div className='outerRectangle'>
      <Image />
      <Info />
      <Contacts />
    </div>
  )
}

export default App

