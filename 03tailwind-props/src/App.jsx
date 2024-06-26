import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Niraj",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css Test</h1>
      <SignIn username="chai aur code" btntxt="click me →"/> 
      <SignIn username="hitesh" btntxt="visit me →"/> 
      <SignIn username="hitesh" /> 

    </>
  )
}

export default App
