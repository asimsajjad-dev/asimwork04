import React from 'react';
import {useState} from 'react';
import './App.css';
import {Message} from './message.js';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning,setMorning]=useState(false);
  return (
    <div className={isMorning ? 'daylight' : 'box'} >
      <h3>Now is ={isMorning ? 'Morning':'Evening'}</h3>
      <Message counter={count} />
      <button onClick={
        ()=>setCount(count+1) 
        }>
        Update counter
      </button>
      <button
      onClick={
()=>setMorning(!isMorning)

      }
      >
        click me
      </button>
    </div>
  );
}

export default App;
