import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage.js";
import { useTodos } from "../hooks/useTodos.js";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const { texts } = useLanguage();
  const { dispatch } = useTodos();

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: crypto.randomUUID(),
        title: title.trim(),
        completed: false,
      },
    });
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder={texts.newTask}
      />
      <button type="submit">{texts.add}</button>
    </form>
  );
}

export default AddTodoForm;
