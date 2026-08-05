import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";

function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used inside a TodoProvider.");
  }

  return context;
}

export { useTodos };
