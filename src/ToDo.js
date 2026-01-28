import React, { useState } from "react";
import { initialTodo } from "./initialTodo";
import ToDoList from "./ToDoList";

function ToDo() {
  const [todos, setTodos] = useState(initialTodo);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const value = String(input).trim();
    if (!value) return;

    // Унікальний id (числовий)
    const maxId = todos.length
      ? Math.max(...todos.map((t) => Number(t.id)))
      : 0;
    const newTodo = { id: String(maxId + 1), name: value };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const onInputChange = (e) => setInput(e.target.value);
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        
      />
      <button onClick={addTodo} style={{ marginLeft: 8 }}>
        Add ToDo
      </button>

      <h2> {todos.length}</h2>

      <ToDoList todos={todos} onRemove={removeTodo} />
    </div>
  );
}

export default ToDo;
