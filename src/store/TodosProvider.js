/** React core **/
import React, { useCallback, useState } from 'react';

/** Contexts **/
import TodosContext from './TodosContex';

const TodosProvider = props => {
  const [todos, setTodos] = useState([]);

  const setTodosHandler = todos => {
    setTodos(todos);
  };

  const getTodosHandler =  async () => {
    const response = await fetch('https://react-todo-app-92619-default-rtdb.firebaseio.com/todos.json');
    const data = await response.json();
    const todosMapped = [];

    for (const key in data) {
      todosMapped.push({
        id: key,
        title: data[key].title,
        active: data[key].active
      });
    }

    setTodos(todosMapped);
  };

  const todosContext = {
    todos,
    setTodos: setTodosHandler,
    getTodos: getTodosHandler,
  };

  return (
    <TodosContext.Provider value={ todosContext }>
      { props.children }
    </TodosContext.Provider>
  )
};

export default TodosProvider;
