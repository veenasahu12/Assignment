import React from 'react'
import { useReducer } from 'react'

const reducer = (counter , action) => {
    switch (action.type){
        case "inc": {
            return counter + 1;
        }
        case "dec": {
            return counter - 1;
        }
        default: {
            return counter
        }
    }
}

const Counter = (props) => {

    const [counter , dispatch] = useReducer(reducer,0);
    return (
        <div>
           <h1>Counter:{counter}</h1> 

           <button onClick={() => dispatch({type: "inc"})}>+</button>
           <button onClick={() => dispatch({type: "dec"})}>-</button>
        </div>
    )
}

export default Counter
