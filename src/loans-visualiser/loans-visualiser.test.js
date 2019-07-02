import React from 'react';
import ReactDOM from 'react-dom';
import LoansVisualiser from './loans-visualiser';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<LoansVisualiser/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
