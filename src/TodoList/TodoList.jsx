import React, { useState } from "react";

const TodoList = () => {
  const [inputvalue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodos = () => {
    if (editIndex !== null) {
      setTodos((tododata) => {
        const updatedList = [...tododata];
        updatedList[editIndex] = inputvalue;
        return updatedList;
      });
      setEditIndex(null);
    } else {
      setTodos((tododata) => {
        const todoList = [...tododata, inputvalue];
        return todoList;
      });
    }
    setInputValue("");
  };

  const removeTodo = (index) => {
    setTodos((tododata) => {
      const filteredList = [...tododata];
      filteredList.splice(index, 1);
      return filteredList;
    });
  };

  const EditTodo = (item, index) => {
    setInputValue(item);
    setEditIndex(index);
  };
  return (
    <>
      <div>
        <div className="flex justify-center mt-5">
          <input
            type="text"
            className="border border-gray-800 rounded w-[20%] p-2"
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="border border-green-500 px-9 py-2 mx-2 rounded bg-green-500 text-white"
            onClick={addTodos}
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-20 mt-3">
          {todos.map((item, index) => {
            return (
              <div className="w-[20%] rounded bg-amber-500 p-2 text-center">
                <h1 className="p-6">{item}</h1>
                <button
                  className="cursor-pointer border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition delay-100 duration-300 mx-2"
                  onClick={() => EditTodo(item, index)}
                >
                  Edit
                </button>
                <button
                  className="cursor-pointer border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition delay-100 duration-300 "
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
