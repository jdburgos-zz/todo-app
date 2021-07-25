/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import Card from './Card';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});
