import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//let countervalue=15

let [counter,setcounter] =useState(15)

const addvalue=()=>{
  console.log("Clicked",counter);
  if(counter<20)
  {
  counter=counter+1
  }
  setcounter(counter)
}
const removevalue=()=>{
  if(counter>0)
  {
    setcounter(counter-1)
  }
  
}
  return (
    <>
       <h1>sumit Read series</h1>
       <h1>counter value:{counter}</h1>
       <button onClick={addvalue}>Add Value {counter}</button>
       <br/>
       <button
       onClick={removevalue}
       >Remove Value{counter}</button>
    </>
  )
}

export default App
