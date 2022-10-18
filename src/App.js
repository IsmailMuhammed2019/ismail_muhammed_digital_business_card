import React from 'react'
import pic from './img/pic.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


import { Container } from 'react-bootstrap'
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
          Hi, I'm Ismail, a DevOps Engineer and an IT Support Engineer who loves
          to build and manage application environments on-premises and in the
          cloud. I recently build and deploy infrastructure for an e-commerce
          platform that saves over 50% cost on the server and IT managing
          services using the latest infrastructure services like docker,
          Kubernetes, AWS cloud, azure, and GCP, and using terraform, CircleCi
          to manage and monitor the services. I'd love to combine my passion for
          DevOps and IT Managing skills to continue building, deploying, and
          managing both cloud and on-premises infrastructure to promote products
          for people
        </p>
      </div>
      <div className='about'>
        <h3>Interest</h3>
        <p>I love to create solutions to problems that require thinking and practicals, to use my investigative interest to come up with ideas that handles the problem and solve them in a fast pace. I love set precedures, routines, and standards activities. Considering relationships important, working with communities of developers to solve problems. I consider archievement important, i consider support from my collegues important, i consider independence important and finally i consider recognition important.</p>
      </div>
    </div>
  )
}

const Social = () => {
  return (
    <div className='social'>
      <a href='https://web.facebook.com/ismyil.mohammed' className='btnEmail'>
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </a>
      <a
        href='https://web.facebook.com/ismyil.mohammed'
        className='btnLinkedin'
      >
        <FontAwesomeIcon icon={faLinkedin} />
        Linkedin
      </a>
    </div>
  )
}

const Intro = () => {
  return (
    <div className="name">
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
    <Container>
      <div className='innerBox'>
      <Image />
      <Intro />
      <Social />
      <Text />
      <SocialIcons />
      </div>
    </Container>
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

