/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import Container from './Container';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container />, div);
});
