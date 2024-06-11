import React from 'react';

const tasks = ['Cricket', 'Dance', 'Sing']

const TaskList = () => {
  return (
    <div>
        {tasks.map((t,indx)=>
        // return <div key={indx} >{t}</div>
        <div key={indx} >{t}</div>
    )}
    </div>
    
  )
}

export default TaskList