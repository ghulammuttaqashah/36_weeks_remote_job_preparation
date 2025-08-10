import { useState } from "react";

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [due, setDue] = useState("");

  const addTask = () => {
    if (task.trim() === "" || due.trim() === "")
      return alert("Please enter both task and due date");
    const newTodo = { task, due };
    setTodos([...todos, newTodo]);
    
    setTask("");
    setDue("");
    
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">To-Do App</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Input Fields */}
        <div className="flex flex-col gap-3 mb-4">
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            placeholder="Write task"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="date"
            onChange={(e) => setDue(e.target.value)}
            value={due}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={addTask}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition duration-200"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet. Add one above.</p>
        ) : (
          <ol className="space-y-3 list-none">
            {todos.map((todo, index) => (
              <li
                key={index}
                
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-800">{todo.task}</p>
                  <p className="text-sm text-gray-500">Due: {todo.due}</p>
                </div>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-200"
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ToDo;
