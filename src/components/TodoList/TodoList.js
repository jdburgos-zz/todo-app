/** React core **/
import { useCallback, useContext, useEffect, useState } from 'react';

/** Components **/
import Wrapper from '../helpers/Wrapper/Wrapper';
import Todo from '../Todo/Todo';

/** Contexts **/
import TodosContext from '../../store/TodosContex';

const TodoList = () => {
  const todosCtx = useContext(TodosContext);

  const getTodosHandler = useCallback( async () => {
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

    todosCtx.setTodos(todosMapped);
  }, []);

  useEffect(() => {
    getTodosHandler();
  }, [getTodosHandler]);

  const todosList = todosCtx.todos.map((todo, index) => <Todo key={index} todo={todo} />)

  return (
    <Wrapper>
      <div>
        { todosList }
      </div>
    </Wrapper>
  );
};

export default TodoList;
