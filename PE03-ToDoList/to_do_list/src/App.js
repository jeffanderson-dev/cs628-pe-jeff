// Author: Jeff Anderson
// CS628 - Full stack web dev
// City University of Seattle
// this file manages the overall state of the todo list, handles user input,
//  and renders the input field, add button, and todo list component

import React, { useState } from 'react';
import TodoList from './components/ToDoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]); // using state the manage the ToDo List array
  const [task, setTask] = useState(''); // using state to manage the ToDo items

  // event hander to handle adding task
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  // event handler handles deletion of task
  const handleDeleteTask = (indexToDelete) => {
    const newTodos = todos.filter((todo, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1>ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TodoList todos={todos} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
