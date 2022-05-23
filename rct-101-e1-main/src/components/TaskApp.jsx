import React, { useState } from "react";
import AddTask from "./AddTask/AddTask"

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks"
import data from "../data/tasks.json";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [todo , setTodo] = useState(data);
  const addTask =(task)=>{
    var newTask={
      "id":data.length+1,
      "text":task,
      "done": false,
      "count": 1
    }
    setTodo([...todo,newTask])
  }
  const toggleTask = (item) => {
    item.done = !item.done;
    setTodo(todo.map(e=>e.id===item.id?item:e));
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={todo}/>
      {/* Add Task */}
      <AddTask addItem={addTask}/>
      {/* Tasks */}
      <Tasks data={todo} toggleTask={toggleTask}/>
    </div>
  );
};

export default TaskApp;
