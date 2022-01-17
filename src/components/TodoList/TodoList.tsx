/** React core **/
import { useEffect, useState } from 'react';

/** Components **/
import Wrapper from '../helpers/Wrapper/Wrapper';
import Card from '../ui/Card/Card';
import Loader from '../ui/Loader/Loader';
import Todo from '../Todo/Todo';

/** Styles **/
import styles from './TodoList.module.scss';

/** Services **/
import TodoDataService from '../../services/todo.service';

/** Types **/
import { TodoType } from '../../types/todo.type';

const TodoList = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const snapshot = await TodoDataService.getAll();

        if (snapshot.exists()) {
          getTodo(snapshot.val());
        }
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  const getTodo = (items: { [key: string]: { active: boolean; title: string } }) => {
    setTimeout(() => {
      const todoMapped: TodoType[] = Object.entries(items).map(item => ({
        id: item[0],
        ...item[1],
      }));

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
  let content: any = <Loader />;
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
