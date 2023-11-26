import React, {useState} from "react"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Box from './components/Box'

const App = () => {

  const [component, setComponent] = useState([])

  const addComponent = () => {
    setComponent([...component, component])
  }

  const removeComponent = () => {
    setComponent([...component].pop())
  }

  return (
  <>
  <div className="wall">
    <Header />
    </div>
  <div className="boxes">
    {component.map((item, i) => (<Box />))}
  </div>
  <div className="wall">
    <br/>
  <button onClick={addComponent}>Add box</button>
  <br/>
  <button onClick={removeComponent}>Remove box</button>
  <br/>
  </div>
  <Footer />
  </>
  )
}

export default App