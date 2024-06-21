import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'

function App() {

  return (
    //  <h1>Chai and code</h1> we can render only one element so we are making a div here to render all the elements 
    <div>
      <Chai />
      <h1>Chai and code</h1>
    </div>

  )
}

export default App
