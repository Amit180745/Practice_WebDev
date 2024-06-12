import React from 'react';

const TodoApp = () => {
 
    let initialTasks = ["Cricket", "Dance", "Sing"]
    const [tasks, setTasks] = useState(initialTasks)

    return (
    <div>
        <h2>Todo App</h2>

        {/* TodoList({tasks}) */}
        <TodoList tasks = {tasks}/>
    </div>
  )
}

export default TodoApp