import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({data,toggleTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map(e => {
          return <Task key={e.id} item={e} toggleTask={toggleTask}/>
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
