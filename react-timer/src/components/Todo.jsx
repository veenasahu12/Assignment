import React,{useEffect, useState} from 'react';
import axios from 'axios'

const Todo = (props) => {
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(5)
  const [totalcount, setTotalCount] = useState(0)
  const [todos,setTodos] = useState([])

  useEffect(() => {
         axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
         .then((r) => {
          //  console.log(r);
        setTodos(r.data)
        setTotalCount(Number(r.headers["X-total-count"]))
      })
     },[page,limit])
  return (
    <div className='App'>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
      <select onChange={(e) => setLimit(Number(e.target.value))}>
      <option value={5}>5</option> 
      <option value={10}>10</option> 
      </select>
      <button disabled={totalcount < page * limit} onClick={() => setPage(page + 1)}>Next</button>
      {todos.map((todos) => {
        return <div key={todos.id}>{todos.title}</div>
      })}
    </div>
  );
}

export default Todo
