import React from 'react';
import './loans.scss';

import LoansVisualiser from "../loans-visualiser/loans-visualiser";

import storage from "../helpers/localStorage.helper";

class Loans extends React.Component {
	/* additional_interest_rate selitys: perustamismaksu on 30 euroa ja lainan automaattisen kuukausiveloituksen kulu on 2,30 euroa.*/
 /* loan yearly fixed fee (kaikki käsittelymaksut jne keskiarvo vuodessa) */

	// For local storage
	componentName = 'Loans';

	constructor(props) {
		super(props);
		this.state = {
			loan: 0,
			total_loan:0,
			interest_rate:0,
			duration_of_studies:0,
			duration_after_studies:0,
			additional_interest_rate:58,
			loan_yearly_fixed_fee:33,
		};



		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// Load state
		this.setState(storage.loadState(this.componentName));
	}

	//// Own business logic
	yearlyLoanCalculation(){
		let loanResult = 0;
		let interestsInEur = 0;
		let totalYears = parseInt(this.state.duration_of_studies) + parseInt(this.state.duration_after_studies);
		for (var i = 0; i < totalYears; i++) {
			console.log(parseInt(this.state.additional_interest_rate));
			let totalInterestRate = parseInt(this.state.additional_interest_rate) + (this.state.interest_rate * 100);
			console.log('total interestrate', totalInterestRate);
			console.log((totalInterestRate / 1000));
			let loanWithInterest = parseInt(this.state.loan) * (totalInterestRate / 1000);
			console.log(loanWithInterest);
			interestsInEur += loanWithInterest + parseInt(this.state.loan_yearly_fixed_fee);
			console.log('interestsInEur',interestsInEur);
		}
  	loanResult = interestsInEur + parseInt(this.state.loan);
		return +loanResult;
	}
	// Change name of this
	/*calculateShit() {
		// this state is a string, remember that

		return +this.state.children + 1;
	}*/

	//// Events

	handleSubmit(event) {

		const result = this.yearlyLoanCalculation();
		alert('Result is: ' + result); // TODO: set to state or something
		this.setState({total_loan: result})
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
						<label>
							Amount of years studying (in years)
							<input
								type="number"
								min="0"
								max="10"
								placeholder="Years"
								onChange={e => this.setState({duration_of_studies: e.target.value})}
								value={this.state.duration_of_studies}
							/>
						</label>
					</div>
					<div>
						<label>
							Amount of student loan
							<input
								type="number"
								min="0"
								max="100000"
								min="1"
								placeholder="Years"
								onChange={e => this.setState({loan: e.target.value})}
								value={this.state.loan}
							/>
						</label>
					</div>
					<div>
						<label>
							Interest rate %
							<input
								type="number"
								min="0"
								max="100"
								step="0.1"
								step="0.01"
								placeholder="Years"
								onChange={e => this.setState({interest_rate: e.target.value})}
								value={this.state.interest_rate}
							/>
						</label>
					</div>
					<div>
						<label className="label">
							Time to pay back the loan (in years)
							<input
								type="number"
								min="0"
								max="10"
								placeholder="Years"
								onChange={e => this.setState({duration_after_studies: e.target.value})}
								value={this.state.duration_after_studies}
							/>
						</label>
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
