import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Counter.css"

const Counter = () => {
    
    const [count, setcount] = useState(0)
    const [message,setMessage]=useState("");
    useEffect(()=>{
      setMessage(`updated count ${count}`)
    },[count])
    function increment(){
        setcount((prev)=>prev+1);
    }
    function decrement(){
        setcount((prev)=>prev-1);
    }
  return (
    <div>
        <h1>My counter app</h1>
        <div className='counter'>
        <button onClick={decrement}>-</button>
        <div className='id1'>{count}</div>
        
        <button onClick={increment}>+</button>

        </div>
        <h1>{message}</h1>
    </div>
  )
}

export default Counter