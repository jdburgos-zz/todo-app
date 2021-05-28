/** React core **/
import { useCallback, useContext, useEffect, useState } from 'react';

/** Components **/
import Wrapper from '../helpers/Wrapper/Wrapper';
import Todo from '../Todo/Todo';

/** Contexts **/
import TodosContext from '../../store/TodosContex';

const TodoList = () => {
  const todosCtx = useContext(TodosContext);

  useEffect(() => {
    todosCtx.getTodos();
  }, []);

  const todosList = todosCtx.todos.map((todo, index) => <Todo key={index} todo={todo} />)

  let content = <p>There aren't todos</p>;

  if (todosList.length > 0) {
    content = todosList;
  }

  if (todosCtx.isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <div>
        { content }
      </div>
    </Wrapper>
  );
};

export default TodoList;
