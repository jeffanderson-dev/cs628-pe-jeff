// Author: Jeff Anderson
// CS628 - Full stack web dev
// City University of Seattle
// this component file displays the todo list array and maps it to a todo item
// component
import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {/* using the map function per the instruction docs */}
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          task={todo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default ToDoList;