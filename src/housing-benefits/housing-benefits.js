import React from 'react';
import './housing-benefits.scss';

import storage from '../helpers/localStorage.helper';

class HousingBenefits extends React.Component {
	// For local storage
	componentName = 'HousingBenefits';

	constructor(props) {
		super(props);
		this.state = {
			children: 0,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// Load state
		this.setState(storage.loadState(this.componentName));
	}

	//// Own business logic

	// Change name of this
	calculateShit() {
		// this state is a string, remember that
		return +this.state.children + 1;
	}

	//// Events

	handleSubmit(event) {
		const result = this.calculateShit();
		alert('Result is: ' + result); // TODO: set to state or something
		event.preventDefault();

		// Save to local storage when something has been changed
		storage.saveState(this.componentName, this.state)
	}


	render() {
		return (
			<section className="housing-benefits">

				<form onSubmit={this.handleSubmit}>
					<input
						type="number"
						min="0"
						max="10"
						placeholder="Children"
						onChange={e => this.setState({children: e.target.value})}
						value={this.state.children}
					/>
					<input type="submit" value="Submit"/>
				</form>

			</section>
		);
	}
}

/* Handling inputs
1. add to this.state a property x
2. copy input, change type and other needed attributes
3. change value={this.state.x}
4. change onChange={e => this.setState({x: e.target.value})}
 */

/*
barn
vuxna
sammanlagda inkomster
kommun
vuokra
vattenavgift
uppvärmningskostnader
*/

export default HousingBenefits;
