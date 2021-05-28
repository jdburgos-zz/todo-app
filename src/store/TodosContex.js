/** React core **/
import React from 'react';

const TodosContext = React.createContext({
  todos: [],
  isLoading: false,
  getTodos: options => {},
});

export default TodosContext;
