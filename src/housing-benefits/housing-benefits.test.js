import React from 'react';
import ReactDOM from 'react-dom';
import HousingBenefits from './housing-benefits';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<HousingBenefits/>, div);
	ReactDOM.unmountComponentAtNode(div);
});
