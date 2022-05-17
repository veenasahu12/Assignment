import React,{ useState} from 'react'
import "./Counter.css"

const Counter = (props) => {
    const [count , setCount] = useState(0);

    const incCount = () => {
        setCount(count+1);
    }

    const decCount = () => {
        setCount(count-1);
    }

    const doubleCount = () => {
        setCount(count*2);
    }

    if(count % 2 === 0){
        document.body.style.color = "#30336b";
      }
    else{
        document.body.style.color = "red";
    }

    return (
        <div className="Counter">
         <h1> <span>Welcome to My Counter App</span></h1>
         <div className="main_div">
         <div className="center">
          <h1> Counter: {count} </h1>
          <div className="btn_div">
            <button onClick={incCount}>Increment</button>
            <button onClick={decCount}>Decrement</button>
            <button onClick={doubleCount}>Double</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Counter


