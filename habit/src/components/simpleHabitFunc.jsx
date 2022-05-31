import React , { useState, useCallback, useEffect } from 'react';

const SimpleHabitFunc = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });      

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);

  return(
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  )
};


export default SimpleHabitFunc;