/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import TodoFilter from './TodoFilter';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoFilter />, div);
});
