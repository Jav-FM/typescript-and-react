import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: { id: number; text: string }[];
  deleteHandler: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, deleteHandler }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text} </span>
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
