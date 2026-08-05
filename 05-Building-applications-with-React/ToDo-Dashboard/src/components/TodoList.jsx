import { useTodos } from "../hooks/useTodos.js";
import TodoItem from "./TodoItem.jsx";

function TodoList() {
  const { todos } = useTodos();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
