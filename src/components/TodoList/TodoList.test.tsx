/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import TodoList from './TodoList';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
});
