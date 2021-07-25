/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
