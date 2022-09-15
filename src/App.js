import 'font-awesome/css/font-awesome.min.css'
import './App.css'



cont Image = () => {
  return (
    <div>
      <img src="./img/pic.jpg" alt="" />
    </div>
    
  )
}


const InnerBox = () => {
  return (
    <div className="innerBox">
      <Image />
      <Intro />
      <Contact />
      <SmallText />
      <Social />
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
