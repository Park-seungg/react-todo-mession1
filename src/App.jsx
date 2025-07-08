import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "공부하기", completed: false },
    { text: "코딩하기", completed: false },
    { text: "운동하기", completed: false },
  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([{ text: form.todo.value, completed: false }, ...todos]);
    form.reset();
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i} className={todo.completed ? "line-through" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(i)}
            />
            {todo.text}
            <button onClick={() => handleDelete(i)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
