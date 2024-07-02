const initialState = {
    todos: [],
    inputvalue: '',
    editIndex: null
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
          inputvalue: ''
        };
      case 'EDIT_TODO':
        return {
          ...state,
          inputvalue: action.payload.item,
          editIndex: action.payload.index
        };
      case 'UPDATE_TODO':
        const updatedTodos = [...state.todos];
        updatedTodos[state.editIndex] = action.payload;
        return {
          ...state,
          todos: updatedTodos,
          inputvalue: '',
          editIndex: null
        };
      case 'REMOVE_TODO':
        const filteredTodos = state.todos.filter((todo, index) => index !== action.payload);
        return {
          ...state,
          todos: filteredTodos
        };
      case 'SET_INPUT_VALUE':
        return {
          ...state,
          inputvalue: action.payload
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  