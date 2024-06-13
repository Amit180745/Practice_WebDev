import React, { useRef } from 'react'

const TodoInput = ({addTask}) => {
    const taskName = useRef();

    function addTodoHandler(){
        console.log(taskName.current.value);
        addTask(taskName.current.value)
    }

  return (
    <div>
        <input ref={taskName} type='text' placeholder='Enter Task'/>
        <button onClick={addTodoHandler}>Add Task</button>
    </div>
  )
}

export default TodoInput