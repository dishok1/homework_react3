import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onRemove }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default ToDoList;