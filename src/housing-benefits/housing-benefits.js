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
			return 0.42 * ((this.state.income - 300) - (597 + 99 * this.state.adults + 221 * this.state.children));
		};

		/**
		 * This check household
		 */
		const householdSize = () => {
			return +this.state.adults + +this.state.children;
		};

		const okeyed = () => {

			const max = householdSize() - 1
			const kommungrupp = this.state.kommun - 1
			if (householdSize() <= 4 && this.state.rent < arr[max][kommungrupp]) return this.state.rent;
			else {
				if (householdSize() > 4) {
					const allowance = arr[3][kommungrupp] + (householdSize() - 4) * arr[4][kommungrupp];
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
			return (okey - base) * 0.80
		};
		console.log('This is size: ' + householdSize());
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

				<article className="card">
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="">Children</label>
						<input
							type="number"
							min="0"
							max="10"
							placeholder="Children"
							onChange={e => this.setState({children: e.target.value})}
							value={this.state.children}
						/>
						<label htmlFor="">Adults</label>
						<input
							type="number"
							min="1"
							max="4"
							placeholder="Adults"
							onChange={e => this.setState({adults: e.target.value})}
							value={this.state.adults}
						/>
						<label htmlFor="">Kommun</label>
						<input
							type="number"
							min="1"
							max="4"
							placeholder="Kommun"
							onChange={e => this.setState({kommun: e.target.value})}
							value={this.state.kommun}
						/>
						<label htmlFor="">Income</label>
						<input
							type="number"
							placeholder="Income"
							onChange={e => this.setState({income: e.target.value})}
							value={this.state.income}
						/>
						<label htmlFor="">Rent</label>
						<input
							type="number"
							placeholder="Income"
							onChange={e => this.setState({rent: e.target.value})}
							value={this.state.rent}
						/>
						<input type="submit" value="Submit"/>
					</form>
				</article>

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
