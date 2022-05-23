import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({item,toggleTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={item.done} onChange={()=> toggleTask(item)} className={styles.checkbox}/>
      <div data-cy="task-text">{item.text}</div>
      {/* Counter here */}
      <Counter count={item.count}/>
      <button data-cy="task-remove-button">-</button>
    </li>
  );
};

export default Task;
