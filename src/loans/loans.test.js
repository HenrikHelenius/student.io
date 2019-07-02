import React from 'react';
import ReactDOM from 'react-dom';
import Loans from './loans';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loans />, div);
  ReactDOM.unmountComponentAtNode(div);
});
