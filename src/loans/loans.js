import React from 'react';
import './loans.scss';

import LoansVisualiser from "../loans-visualiser/loans-visualiser";

import storage from "../helpers/localStorage.helper";

class Loans extends React.Component {
	// For local storage
	componentName = 'Loans';

	constructor(props) {
		super(props);
		this.state = {
			loan: 0,
			total_loan: 0,
			interest_rate: 0,
			duration_of_studies: 0,
			duration_after_studies: 0,
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
			<section className="loans">

				<LoansVisualiser state={this.state}>
				</LoansVisualiser>

				<form onSubmit={this.handleSubmit}>
					<h1> Modify your loan details </h1>
					<div>
						<div className="label">
							Amount of years studying (in years)
							<input
								type="number"
								min="1"
								max="10"
								placeholder="Years"
								onChange={e => this.setState({duration_of_studies: e.target.value})}
								value={this.state.duration_of_studies}
							/>
						</div>
					</div>
					<div>
						<div className="label">
							Amount of student loan
							<input
								type="number"
								min="1"
								placeholder="Years"
								onChange={e => this.setState({loan: e.target.value})}
								value={this.state.loan}
							/>
						</div>
					</div>
					<div>
						<div className="label">
							Interest rate
							<input
								type="number"
								min="0"
								max="100"
								step="0.01"
								placeholder="Years"
								onChange={e => this.setState({interest_rate: e.target.value})}
								value={this.state.interest_rate}
							/>
						</div>
					</div>
					<div>
						<div className="label">
							Time to pay back the loan (in years)
							<input
								type="number"
								min="0"
								placeholder="Years"
								onChange={e => this.setState({duration_after_studies: e.target.value})}
								value={this.state.duration_after_studies}
							/>
						</div>
					</div>
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

export default Loans;
