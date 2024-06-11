import React from 'react';

const tasks = ['Cricket', 'Dance', 'Sing']

const TaskList = () => {
  return (
    <div>
        {tasks.map((t)=>{
        return <div>{t}</div>
    })}
    </div>
    
  )
}

export default TaskList