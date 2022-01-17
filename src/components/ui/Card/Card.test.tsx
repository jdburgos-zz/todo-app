/** React core **/
import ReactDOM from 'react-dom';

/** Components **/
import Card from './Card';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Card className="card">
      <div>Card</div>
    </Card>,
    div,
  );
});
