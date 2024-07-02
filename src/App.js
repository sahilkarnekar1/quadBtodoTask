import React from 'react';
import { Routes, Route } from "react-router-dom"
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


const App = () => {
  return (

      <div>
        <h1>Task Management</h1>
        <Routes>
<Route path="/" element={ <AddTask/> } />
<Route path="/taskList" element={ <TaskList/> } />
</Routes>
      
      </div>
   
  );
};

export default App;
