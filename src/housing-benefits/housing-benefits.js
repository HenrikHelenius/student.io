import React from 'react';
import './housing-benefits.scss';

class HousingBenefits extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			children: 0,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//// Own business logic

	// Change name of this
	calculateShit() {
		// this state is a string, remember that
		return +this.state.children + 1;
	}

	//// Events

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		const result = this.calculateShit();
		alert('Result is: ' + result); // TODO: set to state or something
		event.preventDefault();
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
					<input type="submit" value="Submit" />
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
