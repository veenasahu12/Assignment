import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {Add ,sub , Multiply , Divide} from "./Store/action"
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [value , setValue] = useState(0)
  const state = useSelector((state) => state)

  return (
    <div className="App">
      
      <h1>Counter : {state.count}</h1>
      <div>
        <input type="Number" onChange={e => setValue(e.target.value)}/>
        <button onClick={() => dispatch(Add(value))}>ADD</button>
        <button onClick={() => dispatch(sub(value))}>SUBTRACT</button>
        <button onClick={() => dispatch(Multiply(value))}>MULTIPLY</button>
        <button onClick={() => dispatch(Divide(value))}>DIVIDE</button>

      </div>
    </div>
  );
}

export default App;
