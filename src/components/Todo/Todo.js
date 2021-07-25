/** React core **/
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Todo.module.scss';

/** Services **/
import TodoDataService from '../../services/todo.service';

const Todo = props => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(!props.todo.active);
  }, [props.todo.active]);

  const toggleTodoHandler = () => {
    setCheck(prevState => {
      TodoDataService.update(props.todo.id, { active: !props.todo.active });

      return !prevState;
    });
  };

  const deleteTodoHandler = () => {
    TodoDataService.delete(props.todo.id);
  };

  const isChecked = check || !props.todo.active;
  const checkedClass = isChecked ? styles['todo--checked'] : '';
  const classes = `${styles.todo} ${checkedClass}`.trim();

  return (
    <div className={classes}>
      <div className={styles['todo__check']} onClick={toggleTodoHandler}>
        {isChecked && <img src={`${process.env.PUBLIC_URL}/images/icon-check.svg`} alt="check" />}
      </div>
      <h3 className={styles['todo__title']}>{props.todo.title}</h3>
      <img
        className={styles['todo__cross']}
        src={`${process.env.PUBLIC_URL}/images/icon-cross.svg`}
        alt="cross"
        onClick={deleteTodoHandler}
      />
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Todo;
