import React, { useState, useEffect, useRef } from 'react';
import styles from './assets/Test.module.css'


export function DelayedRender() {
  const [color, setColor] = useState('#000000');
  const [timerMs, setTimerMs] = useState(0)
  
  const [stop, setStop] = useState(null)


  function handleStop(){
    setStop(true)
  }
  function handleStart(){
    setStop(false)
  }
  function handleReset(){
    setStop(true)
    setTimerMs(0)
  }

  useEffect(() => {
    if(stop === false){
      const intervalMs = setInterval(() => {
        if(!stop){
          setTimerMs(time => time + 0.01)
        }
      }, 10)
      
      return () => clearInterval(intervalMs)
    }
  }, [stop])

  //         //             //
  function handleColor(event){
    setColor(event.target.value)
  }

  const firstTime = timerMs.toFixed(3).split('.')[0]
  const lastTime = timerMs.toFixed(3).split('.')[1]
  return (
    <>
      <div className='flex p-3 bg-slate-200 shadow'>
          <div className={styles.colorPickerContainer}>
            <label className={styles.colorPickerLabel} style={{'backgroundColor': color}}/>
            <input type="color" value={color} onChange={handleColor} className={styles.colorPickerInput} />
          </div>
      </div>
      <div className="p-4" style={{'backgroundColor': color}}></div>

      <div className="stop-watch-timer flex m-3 p-5 bg-slate-300">
        <div className="timer w-1/6 flex">
          <h3 className={styles.timer}>{firstTime}</h3>
          <h3 className={styles.dot}>.</h3>
          <h3 className={styles.timer}>{lastTime}</h3>
        </div>
      
       <div className="flex flex-col ml-5">
          <button onClick={handleStop} className='bg-yellow-500 hover:bg-yellow-700 mb-3 text-white font-bold py-2 px-4 rounded transition'>Stop</button>
          <button onClick={handleStart} className='bg-emerald-500 hover:bg-emerald-700 mb-3 text-white font-bold py-2 px-4 rounded transition'>Go</button>
          <button onClick={handleReset} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition'>Reset</button>
       </div>
      </div>
    </>
  );
}