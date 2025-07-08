import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["공부하기", "코딩하기", "운동하기"]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([form.todo.value, ...todos]);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
