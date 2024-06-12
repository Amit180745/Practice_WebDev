import React from 'react'

const TodoList = (props) => {
    let tasks = props.tasks;
  return (
    <div>
        <ul>
            {tasks.map((task, indx) =>
            <li key={indx}>{task}</li>)}
        </ul>
    </div>
  )
}

export default TodoList