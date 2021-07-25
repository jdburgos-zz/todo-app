/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import TodoForm from './TodoForm';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoForm />, div);
});
