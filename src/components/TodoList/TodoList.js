/** React core **/
import React, { useEffect, useState } from 'react';

/** Components **/
import Wrapper from '../helpers/Wrapper/Wrapper';
import Card from '../ui/Card/Card';
import Loader from '../ui/Loader/Loader';
import Todo from '../Todo/Todo';

/** Styles **/
import styles from './TodoList.module.scss';

/** Services **/
import TodoDataService from '../../services/todo.service';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    TodoDataService.getAll().on('value', getTodo);

    return () => {
      TodoDataService.getAll().off('value', getTodo);
    };
  }, []);

  const getTodo = items => {
    setTimeout(() => {
      const todoMapped = [];

      items.forEach(item => {
        const key = item.key;
        const data = item.val();

        todoMapped.push({
          id: key,
          title: data.title,
          active: data.active,
        });
      });

      setCount(
        todoMapped.reduce((prev, curr) => {
          const added = curr.active ? 1 : 0;

          return prev + added;
        }, 0),
      );
      setTodo(todoMapped);
      setLoading(false);
    }, 800);
  };

  const clearTodoCompletedHandler = () => {
    TodoDataService.deleteCompleted(todo);
  };

  const clearAllHandler = () => {
    TodoDataService.deleteAll();
  };

  const todoList = todo.map((todo, index) => <Todo key={index} todo={todo} />);
  let content = <Loader />;
  const hasTodo = todoList.length > 0;
  const todoActions = (
    <div className={styles['todo-list__actions']}>
      <div>{count} items left</div>
      <div className={styles['todo-list__action']} onClick={clearAllHandler}>
        Clear All
      </div>
      <div className={styles['todo-list__action']} onClick={clearTodoCompletedHandler}>
        Clear Completed
      </div>
    </div>
  );

  if (loading) {
    return <Loader />;
  }

  content = hasTodo ? todoList : <p>There aren&apos;t todos</p>;

  return (
    <Wrapper>
      <Card className={styles['todo-list']}>
        <div className={styles['todo-list__content']}>{content}</div>
        {hasTodo && todoActions}
      </Card>
    </Wrapper>
  );
};

export default TodoList;
