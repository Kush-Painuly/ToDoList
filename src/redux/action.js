export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
  });
  
  export const editTodo = (item, index) => ({
    type: 'EDIT_TODO',
    payload: { item, index }
  });
  
  export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    payload: todo
  });
  
  export const removeTodo = (index) => ({
    type: 'REMOVE_TODO',
    payload: index
  });
  
  export const setInputValue = (value) => ({
    type: 'SET_INPUT_VALUE',
    payload: value
  });
  