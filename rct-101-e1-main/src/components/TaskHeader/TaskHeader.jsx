import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({data}) => {
  // sample values to be replaced
  let totalTask = data.length;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b className={styles.h1}>Todo List</b>
      <br/>
      <b data-cy="header-remaining-task">You have {unCompletedTask} </b>
      <b data-cy="header-total-task">of {totalTask} task remaining</b>
    </div>
  );
};

export default TaskHeader;
