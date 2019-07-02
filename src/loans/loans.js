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
			amount_of_interest:0,
			refund:0,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// Load state
		this.setState(storage.loadState(this.componentName));
	}

	calculateRefund(){
		let total_loan = parseInt(this.state.total_loan);
		let refund_percentage = 0.4;
		let min_loan = 2500;

		return (total_loan - min_loan) * refund_percentage;
	}

	//// Own business logic
	yearlyLoanCalculation(){
		let loanResult = 0;
		let interestsInEur = 0;
		let totalYears = parseInt(this.state.duration_of_studies) + parseInt(this.state.duration_after_studies);
		let totalInterestRate = (parseInt(this.state.additional_interest_rate) + (this.state.interest_rate * 100))/10000;
		let loanWithInterest = parseInt(this.state.loan);

		console.log('total interestrate', totalInterestRate);
		console.log((loanWithInterest));
		for (var i = 0; i < totalYears; i++) {

			loanWithInterest += (loanWithInterest * totalInterestRate) + parseInt(this.state.loan_yearly_fixed_fee);
			console.log(loanWithInterest);
		}

		return loanWithInterest;
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
		const refund = this.calculateRefund();
		this.setState({refund: refund})
		event.preventDefault();

		// Save to local storage when  something has been changed
		storage.saveState(this.componentName, this.state)
	}

	render() {
		return (
			<section className="loans">

				<LoansVisualiser state={this.state}>
				</LoansVisualiser>

				<form onSubmit={this.handleSubmit}>
					<h3>
						Modify your loan details
					</h3>
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
								min="1"
								max="100000"
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
								step="0.01"
								placeholder="Years"
								onChange={e => this.setState({interest_rate: e.target.value})}
								value={this.state.interest_rate}
							/>
						</label>
					</div>
					<div>
						<label className="label">
							Loan pay back time (years)
							<input
								type="number"
								min="0"
								max="80"
								placeholder="Years"
								onChange={e => this.setState({duration_after_studies: e.target.value})}
								value={this.state.duration_after_studies}
							/>
						</label>
					</div>
					<input type="submit" value="Calculate" />
					<h3>
						Total loan {this.state.loan}
						<br />
						Your total cost of loan  {this.state.total_loan} 
						<br />
						Hyvitys {this.state.refund}


					</h3>
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
