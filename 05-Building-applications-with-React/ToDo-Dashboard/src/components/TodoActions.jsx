function TodoActions({ todo, onToggleTodo }) {
  const buttonLabel = todo.completed ? "Mark open" : "Mark done";

  return (
    <button type="button" onClick={() => onToggleTodo(todo.id)}>
      {buttonLabel}
    </button>
  );
}

export default TodoActions;
