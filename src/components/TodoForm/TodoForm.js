/** React core **/
import React, { useRef, useState } from 'react';

/** Components **/
import Input from '../ui/Input/Input';
import Card from '../ui/Card/Card';

/** Styles **/
import styles from './TodoForm.module.scss';

/** Services **/
import TodoDataService from '../../services/todo.service';

const TodoForm = () => {
  const [error, setError] = useState(false);
  const todoRef = useRef();

  const inputAddTodoHandler = () => {
    const todoText = todoRef.current.value.trim();

    setError(todoText === '');
  };

  const submitTodoHandler = async e => {
    if (e.key === 'Enter') {
      const todoText = todoRef.current.value.trim();

      if (todoText !== '') {
        setError(false);

        await TodoDataService.create({
          title: todoText,
          active: true,
        });

        todoRef.current.value = '';
      } else {
        setError(true);
      }
    }
  };

  return (
    <Card className={styles['todo-form']}>
      <Input
        ref={todoRef}
        className={styles['todo-input-control']}
        input={{
          id: 'todo-add',
          type: 'text',
        }}
        error={error}
        onChange={inputAddTodoHandler}
        onKeyUp={submitTodoHandler}
      />
    </Card>
  );
};

export default TodoForm;
