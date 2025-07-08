function TodoItem({
  todo,
  index,
  toggleComplete,
  changePriority,
  deleteTodo,
  startEdit,
  editIndex,
  editText,
  setEditText,
  editPriority,
  setEditPriority,
  saveEdit,
  cancelEdit,
}) {
  const inputStyle =
    "flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400";
  const selectStyle = "p-2 border border-gray-300 rounded-md bg-white";
  const buttonStyle = (color) =>
    `px-3 py-1 bg-${color}-500 text-white rounded-md hover:bg-${color}-600 transition-colors`;

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
    <li
      className={`flex items-center gap-2 p-3 rounded-md ${
        todo.completed ? "line-through text-gray-400" : ""
      } ${getPriorityColor(todo.priority)}`}
    >
      {editIndex === index ? (
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={inputStyle}
          />
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className={selectStyle}
          >
            <option value="높음">높음</option>
            <option value="보통">보통</option>
            <option value="낮음">낮음</option>
          </select>
          <button
            onClick={() => saveEdit(index, editText, editPriority)}
            className={buttonStyle("emerald")}
          >
            저장
          </button>
          <button onClick={cancelEdit} className={buttonStyle("gray")}>
            취소
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(index)}
            className="h-5 w-5 text-indigo-500"
          />
          <span className="flex-1">{todo.text}</span>
          <span className="text-sm">[{todo.priority}]</span>
          <select
            value={todo.priority}
            onChange={(e) => changePriority(index, e.target.value)}
            className={selectStyle}
          >
            <option value="높음">높음</option>
            <option value="보통">보통</option>
            <option value="낮음">낮음</option>
          </select>
          <button
            onClick={() => startEdit(index)}
            className={buttonStyle("amber")}
          >
            편집
          </button>
          <button
            onClick={() => deleteTodo(index)}
            className={buttonStyle("rose")}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
