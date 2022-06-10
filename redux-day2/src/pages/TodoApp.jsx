// import axios from 'axios'
import React from 'react'
import  {useEffect}  from 'react'
import { useRef } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {Addtodo, getTodos} from '../store/todo/todo.action'

const TodoApp = (props) => {
    const ref = useRef();
    const dispatch = useDispatch()
    const {loading,error,data:todos} = useSelector((state) => state.todo.getTodos)
    console.log(todos,loading,error)

    const {loading: addbuttonloading} = useSelector((state) => state.todo.Addtodo)

    const addNew = () => {
        let value = ref.current.value;
        console.log(value);
        dispatch(
            Addtodo({
                name: value,
                isCompleted: false
            })
        )
            ref.current.value = null;
    }

    useEffect(() => {
        dispatch(getTodos())
    },[])

    if(loading)
    return <div>LOADING...</div>

    else if(error)
    return <div>SOMETHING WENT WRONG...</div>

    return (
        <div>
            <h1>TODO</h1>
            <input ref={ref} type="text" placeholder='Enter Here'/>
            <button onClick={addNew} disabled={addbuttonloading}>Add</button>
             <br/>
            <br/>
            <br/>
            {todos?.map((todo) => {
                return <div key={todo.id}>{todo.name}</div>
            })}
        </div>
    )
}

export default TodoApp
