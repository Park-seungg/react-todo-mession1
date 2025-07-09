import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [editPriority, setEditPriority] = useState("보통");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, priority) => {
    if (!text.trim()) return;
    setTodos([{ text, completed: false, priority }, ...todos]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changePriority = (index, priority) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, priority } : todo))
    );
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
    setEditPriority(todos[index].priority);
  };

  const saveEdit = (index, text, priority) => {
    if (!text.trim()) return;
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, text, priority } : todo))
    );
    setEditIndex(null);
    setEditText("");
    setEditPriority("보통");
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditText("");
    setEditPriority("보통");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 m-0 p-0">
      <div className="max-w-md w-full p-6 bg-blue-100 rounded-xl shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-indigo-600">
          할 일 목록
        </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          changePriority={changePriority}
          startEdit={startEdit}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          editPriority={editPriority}
          setEditPriority={setEditPriority}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      </div>
    </div>
  );
}

export default App;
