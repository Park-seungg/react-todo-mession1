import TodoItem from "./TodoItem";

function TodoList({
  todos,
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
  return (
    <ul className="space-y-2">
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          index={i}
          toggleComplete={toggleComplete}
          changePriority={changePriority}
          deleteTodo={deleteTodo}
          startEdit={startEdit}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          editPriority={editPriority}
          setEditPriority={setEditPriority}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
