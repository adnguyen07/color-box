import React from "react"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Box from './components/Box'

const App = () => {

  return (
  <>
  <Header />
  <div className="boxes">
    <Box />
    <Box />
    <Box />
  </div>
  <br/>
  <Footer />
  </>
  )
}

export default App