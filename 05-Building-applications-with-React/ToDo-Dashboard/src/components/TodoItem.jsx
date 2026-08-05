import { useLanguage } from "../hooks/useLanguage.js";
import { useTodos } from "../hooks/useTodos.js";

function TodoItem({ todo }) {
  const { dispatch } = useTodos();
  const { texts } = useLanguage();

  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
        />
        <span>{todo.title}</span>
      </label>
      <button
        type="button"
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        {texts.delete}
      </button>
    </li>
  );
}

export default TodoItem;
