/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Loader from './Loader';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader />, div);
});
