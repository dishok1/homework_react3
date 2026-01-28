import React from "react";

function ToDoItem({ todo, onRemove }) {
  return (
    <li>
      <span>{todo.name}</span>
      <button onClick={() => onRemove(todo.id)} style={{ marginLeft: 8 }}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;