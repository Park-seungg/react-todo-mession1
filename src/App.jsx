import useTodos from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const {
    todos,
    editIndex,
    editText,
    editPriority,
    addTodo,
    deleteTodo,
    toggleComplete,
    changePriority,
    startEdit,
    saveEdit,
    cancelEdit,
    setEditText,
    setEditPriority,
  } = useTodos();

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
