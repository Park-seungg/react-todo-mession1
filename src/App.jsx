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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "높음":
        return "bg-rose-100 text-rose-700";
      case "보통":
        return "bg-amber-100 text-amber-700";
      case "낮음":
        return "bg-emerald-100 text-emerald-700";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-100 rounded-xl shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6 text-indigo-600">
        투두리스트
      </h1>
      <form onSubmit={handleOnSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          name="todo"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="할 일 입력"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          className="p-2 border border-gray-300 rounded-md bg-white"
        >
          <option value="높음">높음</option>
          <option value="보통">보통</option>
          <option value="낮음">낮음</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
        >
          등록
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 p-3 rounded-md ${
              todo.completed ? "line-through text-gray-400" : ""
            } ${getPriorityColor(todo.priority)}`}
          >
            {editIndex === i ? (
              <div className="flex flex-1 gap-2">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <select
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="높음">높음</option>
                  <option value="보통">보통</option>
                  <option value="낮음">낮음</option>
                </select>
                <button
                  onClick={() => handleEditSave(i)}
                  className="px-3 py-1 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
                >
                  저장
                </button>
                <button
                  onClick={handleEditCancel}
                  className="px-3 py-1 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
                >
                  취소
                </button>
              </div>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todos.indexOf(todo))}
                  className="h-5 w-5 text-indigo-500"
                />
                <span className="flex-1">{todo.text}</span>
                <span className="text-sm">[{todo.priority}]</span>
                <select
                  value={todo.priority}
                  onChange={(e) =>
                    handlePriorityChange(todos.indexOf(todo), e.target.value)
                  }
                  className="p-1 border border-gray-300 rounded-md bg-white"
                >
                  <option value="높음">높음</option>
                  <option value="보통">보통</option>
                  <option value="낮음">낮음</option>
                </select>
                <button
                  onClick={() => handleEditStart(todos.indexOf(todo))}
                  className="px-3 py-1 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                >
                  편집
                </button>
                <button
                  onClick={() => handleDelete(todos.indexOf(todo))}
                  className="px-3 py-1 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors"
                >
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
