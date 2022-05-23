import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  let [countValue, setCount] = useState(count);
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => setCount(countValue+1)}>+</button>
      <span data-cy="task-counter-value">{countValue}</span>
      <button data-cy="task-counter-decrement-button" onClick={() => setCount(countValue-1)}>-</button>
    </div>
  );
};

export default Counter;
