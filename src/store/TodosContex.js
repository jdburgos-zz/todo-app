/** React core **/
import React from 'react';

const TodosContext = React.createContext({
  todos: [],
  setTodos: ([]) => {},
  getTodos: options => {},
});

export default TodosContext;
