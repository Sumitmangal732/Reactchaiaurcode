import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let mynewobj={
    username:"sumit",
    age:21
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Chaiaurcode" someobje={mynewobj}/>
      <Card username="sumit&suraj"/>
    </>
  )
}

export default App
