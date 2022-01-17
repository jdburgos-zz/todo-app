/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Header from './Header';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
