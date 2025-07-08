import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { text: "공부하기", completed: false, priority: "보통" },
          { text: "코딩하기", completed: false, priority: "보통" },
          { text: "운동하기", completed: false, priority: "보통" },
        ];
  });
  const [newPriority, setNewPriority] = useState("보통");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editPriority, setEditPriority] = useState("보통");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([
      {
        text: form.todo.value,
        completed: false,
        priority: newPriority,
      },
      ...todos,
    ]);
    form.reset();
    setNewPriority("보통");
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

  const handlePriorityChange = (index, priority) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, priority } : todo))
    );
  };

  const handleEditStart = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
    setEditPriority(todos[index].priority);
  };

  const handleEditSave = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, text: editText, priority: editPriority } : todo
      )
    );
    setEditIndex(null);
    setEditText("");
    setEditPriority("보통");
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditText("");
    setEditPriority("보통");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
        >
          <option value="높음">높음</option>
          <option value="보통">보통</option>
          <option value="낮음">낮음</option>
        </select>
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i} className={todo.completed ? "line-through" : ""}>
            {editIndex === i ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <select
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                >
                  <option value="높음">높음</option>
                  <option value="보통">보통</option>
                  <option value="낮음">낮음</option>
                </select>
                <button onClick={() => handleEditSave(i)}>저장</button>
                <button onClick={handleEditCancel}>취소</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todos.indexOf(todo))}
                />
                {todo.text} [우선순위: {todo.priority}]
                <select
                  value={todo.priority}
                  onChange={(e) =>
                    handlePriorityChange(todos.indexOf(todo), e.target.value)
                  }
                >
                  <option value="높음">높음</option>
                  <option value="보통">보통</option>
                  <option value="낮음">낮음</option>
                </select>
                <button onClick={() => handleEditStart(todos.indexOf(todo))}>
                  편집
                </button>
                <button onClick={() => handleDelete(todos.indexOf(todo))}>
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
