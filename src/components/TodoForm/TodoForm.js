/** React core **/
import { useContext, useRef, useState } from 'react';

/** Components **/
import Input from '../ui/Input/Input';

/** Styles **/
import styles from './TodoForm.module.scss';

/** Contexts **/
import TodosContext from '../../store/TodosContex';

const TodoForm = () => {
  const [error, setError] = useState(false);
  const todoRef = useRef();
  const todosCtx = useContext(TodosContext);

  const inputAddTodoHandler = () => {
  };

  const submitTodoHandler = async (e) => {
    if (e.key === 'Enter') {
      await fetch('https://react-todo-app-92619-default-rtdb.firebaseio.com/todos.json', {
        method: 'POST',
        body: JSON.stringify({
          title: todoRef.current.value,
          active: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      todosCtx.getTodos();
    }
  };

  return (
    <Input
      ref={ todoRef }
      className={ styles['pledge__footer-input-control'] }
      input={ {
        id: 'todo-add',
        type: 'text'
      } }
      error={ error }
      onChange={ inputAddTodoHandler }
      onKeyUp={ submitTodoHandler }
    />
  );
};

export default TodoForm;
