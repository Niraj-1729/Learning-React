import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  // let counter = 15

  const addValue = () => {
    // console.log("value Added", Math.random());
    // console.log("clicked", counter)
    counter = counter + 1;
    setcounter(counter)
  }

  const removeValue = () => {
    setcounter (counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br></br>
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
