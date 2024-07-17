import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

// Modal을 앱의 루트에 연결
Modal.setAppElement("#root");

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/api/todos");
    setTodos(response.data);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/todos", {
      contents: newTodo,
      yesno: "no",
    });
    setNewTodo("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:4000/api/todos/${id}`);
    fetchTodos();
  };

  const toggleTodo = async (todo) => {
    await axios.put(`http://localhost:4000/api/todos/${todo.id}`, {
      ...todo,
      yesno: todo.yesno === "yes" ? "no" : "yes",
    });
    fetchTodos();
  };

  const openModal = (todo) => {
    setSelectedTodo(todo);
    setEditTodo(todo.contents);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTodo(null);
    setEditTodo("");
  };

  const updateTodo = async () => {
    await axios.put(`http://localhost:4000/api/todos/${selectedTodo.id}`, {
      ...selectedTodo,
      contents: editTodo,
    });
    fetchTodos();
    closeModal();
  };

  return (
    <div className="min-h-screen bg-pink-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center text-pink-600">
                Todo List
              </h1>
            </div>
            <form onSubmit={addTodo} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Add new todo"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-pink-200 placeholder-pink-400 text-pink-800 rounded-t-md focus:outline-none focus:ring-pink-300 focus:border-pink-300 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300"
                >
                  Add Todo
                </button>
              </div>
            </form>
            <ul className="mt-8 space-y-4">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between bg-pink-100 px-4 py-2 rounded-md"
                >
                  <span
                    onClick={() => openModal(todo)}
                    className={`flex-grow cursor-pointer ${
                      todo.yesno === "yes"
                        ? "line-through text-pink-300"
                        : "text-pink-600"
                    }`}
                  >
                    {todo.contents}
                  </span>
                  <button
                    onClick={() => toggleTodo(todo)}
                    className="ml-2 px-2 py-1 text-xs font-medium text-pink-600 bg-pink-200 rounded-md hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300"
                  >
                    {todo.yesno === "yes" ? "Undo" : "Done"}
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="ml-2 px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Todo"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Edit Todo</h2>
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={updateTodo}
            className="px-4 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300"
          >
            Update
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
