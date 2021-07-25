/** React core **/
import React, { useEffect, useState } from 'react';

/** Components **/
import Wrapper from '../helpers/Wrapper/Wrapper';
import Card from "../ui/Card/Card";
import Loader from "../ui/Loader/Loader";
import Todo from '../Todo/Todo';

/** Styles **/
import styles from './TodoList.module.scss';

/** Services **/
import TodoDataService from "../../services/todo.service";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const getTodo = items => {
    setTimeout(() => {
      const todoMapped = [];

    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      todoMapped.push({
        id: key,
        title: data.title,
        active: data.active
      });
    });

    setCount(todoMapped.reduce((prev, curr) => {
      const added = curr.active ? 1 : 0;

      return prev + added;
    }, 0));
    setTodo(todoMapped);
    }, 800)
  };

  useEffect(() => {
    TodoDataService.getAll().on("value", getTodo);
    setLoading(false);

    return () => {
      TodoDataService.getAll().off("value", getTodo);
    };
  }, []);

  const clearTodoCompletedHandler = () => {
    TodoDataService.deleteCompleted(todo);
  };

  const clearAllHandler = () => {
    TodoDataService.deleteAll();
  };

  const todoList = todo.map((todo, index) => <Todo key={index} todo={todo} />)
  let content = <p>There aren&apos;t todos</p>;
  const hasTodo = todoList.length > 0;

  if (loading) {
    content = <Loader/>
  }

  if (hasTodo) {
    content = todoList;
  }

  return (
    <Wrapper>
      <Card className={ styles['todo-list'] }>
        <div className={ styles['todo-list__content'] }>{ content }</div>
        <div className={ styles['todo-list__actions'] }>
          { hasTodo && <div>{ count } items left</div> }
          { hasTodo && <div className={ styles['todo-list__action'] } onClick={ clearAllHandler }>Clear All</div> }
          { hasTodo && <div className={ styles['todo-list__action'] } onClick={ clearTodoCompletedHandler }>Clear Completed</div> }
        </div>
      </Card>
    </Wrapper>
  );
};

export default TodoList;
