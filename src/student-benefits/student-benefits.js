import React from 'react';
import './student-benefits.scss';

import saveStateToStorage from "../localStorage.helper";

class StudentBenefits extends React.Component {
	// For local storage
	componentName = 'StudentBenefits';

	constructor(props) {
		super(props);
		this.state = {
			children: 0,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
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
		saveStateToStorage(this.state, this.componentName)
	}

	render() {
		return (
			<section className="student-benefits">
				Basti
				<form onSubmit={this.handleSubmit}>
					<input
						type="number"
						min="0"
						max="10"
						placeholder="Children"
						onChange={e => this.setState({ children: e.target.value })}
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
ålder
checkbox oppilaitos 2. / korekakoulu
checkbox bor ensam / föräldrar
föräldrarnas inkomst
gift
barn
när skolan börjar
*/

export default StudentBenefits;
