import React from 'react';
import ReactDOM from 'react-dom';
import Bank from './bank';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Bank/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
