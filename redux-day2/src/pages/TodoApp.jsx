import React from 'react'
import { useRef } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {Addtodo} from './todo/todo.action'

const TodoApp = (props) => {
    const ref = useRef();
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todo.todos)


    const addNew = () => {
        let value = ref.current.value;
        console.log(value);
        dispatch(
            Addtodo({
                value: value,
                isCompleted: false
            })
        )
    }

    return (
        <div>
            <h1>TODO</h1>
            <input ref={ref} type="text" placeholder='Enter Here'/>
            <button onClick={addNew}>Add</button>

            <br/>
            <br/>
            <br/>
            {todos.map((todo) => {
                return <div key={todo.id}>{todo.value}</div>
            })}
        </div>
    )
}

export default TodoApp
