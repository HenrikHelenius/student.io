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
			adults: 0,
			kommun: 1,
			income: 0,
			rent: 0,
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
		const arr = [
			[516, 499, 396, 349],
			[746, 717, 579, 509],
			[951, 903, 734, 651],
			[1111, 1054, 869, 775],
			[139, 132, 119, 114]
		];

		const baseExcess = () => {

			return 0.42 * ((this.state.income - 300) - (597 + 99 * this.state.adults + 22 * this.state.children));
		};

		/**
		 * This check household
		 */
		const householdSize = () => {
			return this.state.adults + this.state.children
		};

		const okeyed = () => {

			const max = 1 - householdSize();
			const kommungrupp = 1 - this.state.kommun;

			if (this.state.rent < arr[max][kommungrupp]) return this.state.rent;
			else {
				if (householdSize > 4) {
					const allowance = arr[max][kommungrupp] + 5 * arr[5][kommungrupp];
					return allowance
				} else {
					return arr[max][kommungrupp]
				}
			}

		};

		const benefit = () => {
			alert('Fuck me benefit');
			const okey = okeyed();
			const base = baseExcess();
			return okey - base
		};

		return benefit();
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
				Kasper
				Children
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
				Adults
				<form onSubmit={this.handleSubmit}>
					<input
						type="number"
						min="0"
						max="10"
						placeholder="Adults"
						onChange={e => this.setState({adults: e.target.value})}
						value={this.state.adults}
					/>
					<input type="submit" value="Submit"/>
				</form>
				Kommun
				<form onSubmit={this.handleSubmit}>
					<input
						type="number"
						min="1"
						max="4"
						placeholder="Kommun"
						onChange={e => this.setState({kommun: e.target.value})}
						value={this.state.kommun}
					/>
					<input type="submit" value="Submit"/>
				</form>
				Income
				<form onSubmit={this.handleSubmit}>
					<input
						type="number"

						placeholder="Income"
						onChange={e => this.setState({income: e.target.value})}
						value={this.state.income}
					/>
					<input type="submit" value="Submit"/>
				</form>
				Rent
				<form onSubmit={this.handleSubmit}>
					<input
						type="number"

						placeholder="Income"
						onChange={e => this.setState({rent: e.target.value})}
						value={this.state.rent}
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
