import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  editTodo,
  updateTodo,
  removeTodo,
  setInputValue
} from '../redux/action';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const inputvalue = useSelector(state => state.inputvalue);
  const editIndex = useSelector(state => state.editIndex);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (editIndex !== null) {
      dispatch(updateTodo(inputvalue));
    } else {
      dispatch(addTodo(inputvalue));
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  const handleEditTodo = (item, index) => {
    dispatch(editTodo(item, index));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-4xl text-center p-5 font-extrabold'>ToDo List </h1>
      <div className="flex justify-center mb-5">
        <input
          type="text"
          className="border border-gray-800 rounded w-full md:w-[50%] lg:w-[30%] xl:w-[20%] p-2"
          placeholder="Add a todo"
          value={inputvalue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />
        <button
          className="ml-2 px-6 py-2 rounded bg-green-500 text-white"
          onClick={handleAddTodo}
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {todos.map((item, index) => (
          <div key={index} className="bg-yellow-300 rounded p-4 text-center">
            <h1 className="font-bold mb-2">{item}</h1>
            <div className="flex justify-center">
              <button
                className="mr-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
                onClick={() => handleEditTodo(item, index)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 transition duration-300"
                onClick={() => handleRemoveTodo(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
