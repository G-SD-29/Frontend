import { useLanguage } from "../hooks/useLanguage.js";
import { useTodos } from "../hooks/useTodos.js";
import AddTodoForm from "./AddTodoForm.jsx";
import Panel from "./Panel.jsx";
import TodoList from "./TodoList.jsx";

function TodoSection() {
  const { texts } = useLanguage();
  const { todos } = useTodos();
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <Panel title={texts.tasks}>
      <p>
        {completedCount} {texts.of} {todos.length} {texts.completed}
      </p>
      <AddTodoForm />
      <TodoList />
    </Panel>
  );
}

export default TodoSection;
