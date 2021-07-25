/** React core **/
import ReactDOM from 'react-dom';
import React from 'react';

/** Components **/
import Wrapper from './Wrapper';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Wrapper>
      <div>Wrapper</div>
    </Wrapper>,
    div,
  );
});
