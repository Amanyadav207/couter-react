import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount] = useState(0)

  const addvalue = () => {
    count = count + 1
    setcount(count)
  }

  const decvalue = () => {
    if(count == 0){
      alert("Counter can't be negative")
      setcount(0)
    }
    else{
      count = count - 1
      setcount(count)
    }
  }

  return (
    <>
      <h1>Counter : {count} </h1>
      <button onClick={addvalue} >Increase</button>
      <br />
      <button onClick={decvalue}>Decrease</button>
    </>
  )
}

export default App
