import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {
 
    let initialTasks = ["Cricket", "Dance", "Sing"]
    const [tasks, setTasks] = useState(initialTasks);

    function decreasePriority(taskName){
        console.log("You are trying to reduce the priority",taskName);
    }
    function increasePriority(taskName){
        console.log("You are trying to increase the priority",taskName);
    }
    function deleteTask(taskName){
        console.log("You are trying to deleting",taskName);
    }

    return (
    <div>
        <h2>Todo App</h2>
        {/* TodoList({tasks}) */}
        <TodoList 
            tasks={tasks}
            decreasePriority={decreasePriority}
            increasePriority={increasePriority}
            deleteTask={deleteTask}/>
    </div>
  )
}

export default TodoApp