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
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  };
  return (
    <div className="App">
      <NewTodo handler={todoAppHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
