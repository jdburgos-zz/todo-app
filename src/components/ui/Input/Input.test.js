/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Input from './Input';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
});
