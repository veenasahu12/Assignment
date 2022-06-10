import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {Add ,sub} from "../store/counter/counter.action"

const CounterApp = (props) => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)
    return (
        <div>
            <h1>COUNTER : {count}</h1>
            <button onClick={() => dispatch(Add())}>+</button>
            <button onClick={() => dispatch(sub())}>-</button>
        </div>
    )
}

export default CounterApp
