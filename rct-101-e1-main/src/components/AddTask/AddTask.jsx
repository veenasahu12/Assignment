import React, {useState} from "react";
import styles from "./addTask.module.css";

const AddTask = ({addItem}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [newtask , setTask] = useState("")
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." className={styles.inputbox} onChange={e => setTask(e.target.value)}/>
      <button data-cy="add-task-button" className={styles.button} onClick={() =>addItem(newtask)}>+</button>
    </div>
  );
};

export default AddTask;
