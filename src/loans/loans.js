import React from 'react';
import './loans.scss';


class Loans extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loan: 0,
			total_loan: 0,
			interest_rate:0,
			duration_of_studies:0,
			duration_after_studies:0,
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
			<section className="loans">

				<form onSubmit={this.handleSubmit}>
					<h1> Modify your loan details </h1>
					<div>
						<div className="label">
							Amount of years studying (in years)
							<input
								type="number"
								min="1"
								max="10"
								placeholder="test"
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
								max="10"
								placeholder="test"
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
								placeholder="test"
								onChange={e => this.setState({children: e.target.value})}
								value={this.state.children}
							/>
						</div>
					</div>
					<div>
						<div className="label">
							Time to pay back the loan (in years)
							<input
								type="number"
								min="1"
								max="10"
								placeholder="test"
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
