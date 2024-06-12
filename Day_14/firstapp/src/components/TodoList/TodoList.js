import React from 'react'
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({tasks,decreasePriority,increasePriority,deleteTask}) => {
  return (
    <div>
        <ul>
            {tasks.map((task, indx) => 
            <TodoItem 
            key={indx} 
            taskName = {task}
            decreasePriority={decreasePriority}
            increasePriority={increasePriority}
            deleteTask={deleteTask}/>)}
        </ul>
    </div>
  )
}

export default TodoList