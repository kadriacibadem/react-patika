import React from 'react'
import { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0)

    const increase = () =>{
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

  return (
    <div>


        <h1>{counter}</h1>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>

    </div>
  )
}


export default Counter