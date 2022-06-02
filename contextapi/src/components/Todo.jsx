import React, {useState} from 'react'
import AddItems from './AddItems'
import Task from './Task';
import TodoList from './TodoList';
import "./todo.css"

const Todo = (props) => {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState(false);

    const addItem = (data) => {
        var newTask={
                  "id": todos.length+1,
                  "text": data,
                  "done": false,
                }
        setTodos([...todos, newTask]);
    }
    const deletion = (position) => {
        todos.splice(position,1)
        setTodos([...todos])
    }
    const checkbox = (item) => {
        item.done = !item.done;
        setTodos([...todos])
    }
    return (
        <div className='todo'>
            <AddItems addItem={addItem} />
            <Task checkbox={checkbox} deletion={deletion} todos={todos}/>
            <div >
               <button className='btn2' onClick={() => { setDoneTodos(!doneTodos) }}>Show Completed To-Dos</button>
               {doneTodos ? <TodoList deletion={deletion} todos={todos} /> : null}
            </div>
        </div>
    )
}

export default Todo
