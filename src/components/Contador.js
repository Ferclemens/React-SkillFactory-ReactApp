import React from 'react'
import { useState } from "react"

function Contador() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count -1)
    }

  return (
    <div className='contador'>
        <h3>Contador: {count}</h3>
        <div>
            <button className="button" onClick={increase}>Aumentar count!</button>
            <button className="button" onClick={decrease}>Disminuir count!</button>
        </div>
    </div>
  )
}

export default Contador