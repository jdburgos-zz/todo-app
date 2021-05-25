/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Wrapper from './Wrapper';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wrapper />, div);
});
