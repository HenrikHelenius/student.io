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
			unemployed: 0,
			housing: 0,
			total: 0,
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

		const totalIncome = () => {
			return +this.state.income + +this.state.unemployed
		}

		const baseExcess = () => {
			return 0.42 * ((totalIncome() - 300) - (597 + 99 * this.state.adults + 221 * this.state.children));
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
			let allowance = 0

			if (householdSize() <= 4) {
				allowance = arr[max][kommungrupp]
			} else {
				allowance = arr[3][kommungrupp] + (householdSize() - 4) * arr[4][kommungrupp];
			}

			if (this.state.rent < allowance) return this.state.rent;
			else return allowance


		};

		const benefit = () => {
			return (okeyed() - baseExcess()) * 0.80
		};


		return benefit();

	}

	calculateTotalIncome() {
		return +this.state.income + +this.state.unemployed + +this.state.housing
	}



	//// Events

	handleSubmit(event) {
		const result = this.calculateShit();

		this.setState({ housing: result })
		const calculateTotal = this.calculateTotalIncome
		this.setState({ total: calculateTotal })

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
							onChange={e => this.setState({ children: e.target.value })}
							value={this.state.children}
						/>
						<label htmlFor="">Adults</label>
						<input
							type="number"
							min="1"
							max="4"
							placeholder="Adults"
							onChange={e => this.setState({ adults: e.target.value })}
							value={this.state.adults}
						/>
						<label htmlFor="">Kommun</label>
						<input
							type="number"
							min="1"
							max="4"
							placeholder="Kommun"
							onChange={e => this.setState({ kommun: e.target.value })}
							value={this.state.kommun}
						/>
						<label htmlFor="">Income</label>
						<input
							type="number"
							placeholder="Income"
							onChange={e => this.setState({ income: e.target.value })}
							value={this.state.income}
						/>
						{
							// Styla dom här lite inåt
							/* Arbetslöshets
						Sairausvakuutuksen päiväraha, äitiysraha tai muu päiväraha
						Yrittäjätulo (maatalous tai muu)
						Lasten kotihoidontuki
						Eläke
						Opintoraha
						Pääoma- tai muu tulo */}
						<label htmlFor="">Unemployment benefit</label>
						<input
							type="number"
							placeholder="Unemployment benefit"
							onChange={e => this.setState({ unemployed: e.target.value })}
							value={this.state.unemployed}
						/>
						<label htmlFor="">Rent</label>
						<input
							type="number"
							placeholder="Income"
							onChange={e => this.setState({ rent: e.target.value })}
							value={this.state.rent}
						/>

						<input type="submit" value="Submit" />
					</form>
					<h3>
						Total income {this.state.total}
						<br />
						Your total housing benefit is  {this.state.housing}
						<br />


					</h3>

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
