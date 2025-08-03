// Author: Jeff Anderson
// CS628 - Full stack web dev
// City University of Seattle
// This component handles the presentation of to do list items, displays them
//  in a list, and renders a delete button for the task

import React from 'react';

const ToDoItem = ({ task, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ToDoItem;