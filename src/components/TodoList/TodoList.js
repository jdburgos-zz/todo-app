/** React core **/
import { useEffect, useState } from 'react';

/** Components **/
import Wrapper from '../helpers/Wrapper/Wrapper';
import Card from "../ui/Card/Card";
import Todo from '../Todo/Todo';

/** Styles **/
import styles from './TodoList.module.scss';

/** Services **/
import TodoDataService from "../../services/todo.service";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const getTodos = items => {
    const todosMapped = [];

    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      todosMapped.push({
        id: key,
        title: data.title,
        active: data.active
      });
    });

    setCount(todosMapped.reduce((prev, curr) => {
      const added = curr.active ? 1 : 0;

      return prev + added;
    }, 0));
    setTodos(todosMapped);
  };

  useEffect(() => {
    TodoDataService.getAll().on("value", getTodos);

    return () => {
      TodoDataService.getAll().off("value", getTodos);
    };
  }, []);

  const todosList = todos.map((todo, index) => <Todo key={index} todo={todo} />)

  let content = <p>There aren't todos</p>;

  if (todosList.length > 0) {
    content = todosList;
  }

  return (
    <Wrapper>
      <Card className={ styles['todo-list'] }>
        <div className={ styles['todo-list__content'] }>{ content }</div>
        <div className={ styles['todo-list__actions'] }>
          <div>{ count } items left</div>
          <div className={ styles['todo-list__action'] }>Clear Completed</div>
        </div>
      </Card>
    </Wrapper>
  );
};

export default TodoList;
