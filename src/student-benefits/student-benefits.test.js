import React from 'react';
import ReactDOM from 'react-dom';
import StudentBenefits from './student-benefits';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<StudentBenefits/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
