/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import Todo from './Todo';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const todo = {
    id: 'asdasd',
    active: true,
    title: 'test',
  };

  ReactDOM.render(<Todo todo={todo} />, div);
});
