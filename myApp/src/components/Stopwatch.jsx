import React, { useEffect } from 'react'
import { useState} from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(()=>{
      let interval;
      if(running){
        interval=setInterval(()=>{
          setTime((prevTime)=>prevTime+10)

        },10);

      }
     
      return()=>{
        clearInterval(interval);
      };
      
    },[running])
    const run=()=>{
        setTime(time+1);
        console.log(time+1);
    }
    const ms=((time%1000)/10);
    const sec=Math.round((time%60000)/1000);
    const minute=Math.round(sec/60)


  return (
    <div>
        <h1>Stopwatch</h1>
        <div className='maintime'>
          <div className='id1'>{minute}:{sec}:{ms}</div>
          <button onClick={()=>(setRunning((prev)=>!prev))}>{running?"Start":"Stop"}</button>
          <button onClick={()=>(setTime(0))}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch




