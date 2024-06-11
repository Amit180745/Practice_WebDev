import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TaskList from './components/TaskList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <div>
     <App />
     <TaskList/>
   </div>
);
