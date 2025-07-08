import { useState } from "react";

function TodoForm({ addTodo }) {
  const [newPriority, setNewPriority] = useState("보통");
  const [input, setInput] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(input, newPriority);
    setInput("");
    setNewPriority("보통");
  };

  const inputStyle =
    "flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400";
  const selectStyle = "p-2 border border-gray-300 rounded-md bg-white";
  const buttonStyle =
    "px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors";

  return (
    <form onSubmit={handleOnSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        name="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={inputStyle}
        placeholder="할 일 입력"
      />
      <select
        value={newPriority}
        onChange={(e) => setNewPriority(e.target.value)}
        className={selectStyle}
      >
        <option value="높음">높음</option>
        <option value="보통">보통</option>
        <option value="낮음">낮음</option>
      </select>
      <button type="submit" className={buttonStyle}>
        등록
      </button>
    </form>
  );
}

export default TodoForm;
