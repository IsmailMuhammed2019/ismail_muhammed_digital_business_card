import React from 'react'
import pic from './img/pic.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


// import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'

const SocialIcons = () => {
  return (
    <div className='socialicons'>
      <a href='https://web.facebook.com/ismyil.mohammed'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='https://web.facebook.com/ismyil.mohammed'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href='https://web.facebook.com/ismyil.mohammed'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href='https://web.facebook.com/ismyil.mohammed'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  )
}

const Text = () => {
  return (
    <div>
      <div className='about'>
        <h3>About</h3>
        <p>
          Hi, I'm Ismail, a DevOps Engineer, System Admin, an IT Support Engineer, and Web Developer. who loves to build and manage application environments on-premises and in the
          cloud. I have contributed to projects that has been a major benefits to the community with my extended knwoledge of IT.
        </p>
      </div>
      <div className='about bottom'>
        <h3>Interest</h3>
        <p>I love to create solutions to problems that require thinking and practicals, to use my investigative interest to come up with ideas that handles the problem and solve them in a fast pace. I love set precedures, routines, and standards activities. </p>
      </div>
    </div>
  )
}

const Social = () => {
  return (
    <div className='social'>
      <a href='https://web.facebook.com/ismyil.mohammed'><button className='btnEmail'>
        <FontAwesomeIcon icon={faEnvelope} className="iconemail" />
        Email
        </button>
      </a>
      <a
        href='https://web.facebook.com/ismyil.mohammed' ><button
        className='btnLinkedin'
      >
        <FontAwesomeIcon icon={faLinkedin} className="iconemail"/>
        Linkedin
        </button>
      </a>
    </div>
  )
}

const Intro = () => {
  return (
    <div className="name">
      <h1>Ismail Muhammed</h1>
      <h3>Sys Admin | DevOps Engr | Web Developer</h3>
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
    // <Container>
      <div className='innerBox'>
      <Image />
      <Intro />
      <Social />
      <Text />
      <SocialIcons />
      </div>
    // </Container>
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

