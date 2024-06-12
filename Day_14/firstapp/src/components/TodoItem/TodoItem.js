import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = ({taskName}) => {
  return (
    <div className={classes['taskItem']}>
        <div className={classes['taskName']}>{taskName}</div>
        <div className={classes['btngroup']}>
        <button>⬆️</button>
        <button>⬇️</button>
        <button>❌</button>
        </div>
    </div>
  )
}

export default TodoItem