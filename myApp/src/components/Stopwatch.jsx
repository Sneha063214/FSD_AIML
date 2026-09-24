// import React from 'react'
// import { useState } from 'react'

// const Stopwatch = () => {
//     const [time, setTime] = useState(0)
//     const [running, setRunning] = useState(false)
//     const [stop, setStop] = useState(true)

//     const run=()=>{
//         setTime(time+1);
//         console.log(time+1);
//     }
//     const timemin=setInterval(run,10000);
   
//   return (
//     <div>
//         <h1>Stopwatch</h1>
//         <div className='timer'>
//             <div className='min'>
//                 <h2>{time}</h2>
//             </div>
//             :
//             <div className='sec'>
//                 <h2></h2>
//             </div>
//             :
//             <div className='milisec'>
//                 <h2></h2>
//             </div>
//             <div className="btns">
//                 <button onClick={setRunning((prev)=>!prev)}>Start</button>
//                 <button>Stop</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Stopwatch

import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <div>
      <h1>{time} seconds</h1>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>

      <button onClick={() => setTime(0)}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;



// import { useEffect, useState } from "react";

// function Stopwatch() {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (running) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 10);
//       }, 10);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [running]);

 
//   const minutes = Math.floor(time / 60000);

//   const seconds = Math.floor((time % 60000) / 1000);

//   const milliseconds = Math.floor((time % 1000) / 10);

//   return (
//     <div>
//       <h1>
//         {String(minutes).padStart(2, "0")}:
//         {String(seconds).padStart(2, "0")}:
//         {String(milliseconds).padStart(2, "0")}
//       </h1>

//       <button onClick={() => setRunning(true)}>
//         Start
//       </button>

//       <button onClick={() => setRunning(false)}>
//         Stop
//       </button>

//       <button
//         onClick={() => {
//           setTime(0);
//           setRunning(false);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Stopwatch;

