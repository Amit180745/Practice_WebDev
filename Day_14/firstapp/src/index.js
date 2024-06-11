import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TaskList from './components/TaskList';
import Counter from './components/Counter/Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     {/* <App /> */}
     {/* <TaskList/> */}
     <Counter/>
   </React.StrictMode>
);
