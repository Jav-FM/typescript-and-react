import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/todo.model";

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAppHandler = (text: string) => {
    const newId = todos.length + 1;
    const newTodo = {
      id: newId,
      text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeleteHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo addHandler={todoAppHandler} />
      <TodoList items={todos} deleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
