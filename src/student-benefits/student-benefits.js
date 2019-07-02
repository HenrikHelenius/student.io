import React from 'react';
import './student-benefits.scss';

const Checkbox = (props) => {
	return(
	<div>
	<p> Independent?</p>
	<input type="checkbox" name={props.name} />
	</div>
	)
}
import storage from "../helpers/localStorage.helper";

class StudentBenefits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: false,
            isUniversity: false,
            age: 0,
            parentIncome: 0,
            ownIncome: 0,
            isIndependent: false,
            isMarried: false,
            studyBegin: "0.0.0",
            credits: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //// Own business logic

    //Only for 300 Yleinen tutkimus (add support for others later)
    //Alempi, Ylempi, Total.
    supportMonths = [30, 21, 48];
	componentDidMount() {
		// Load state
		this.setState(storage.loadState(this.componentName));
	}

	//// Own business logic

	//1.8.2019 alkaen
	parentIncomeInfluence() {
		const { parentIncome } = this.state;
		if(parentIncome < 41400) {
			return 100; //not real value
		}
		else {
			return 0
		}
	}

    opintoTuki = () => {
        const { children, age, isMarried, isIndependent } = this.state;
		if(children) {
			return +325.28;
		}
		else if(isMarried) {
			return +250.28;
		}
		else if( age >= 17 && age < 20 && !isIndependent) {
			return +38.66 + this.parentIncomeInfluence();
		}
		else if(age >= 20 && !isIndependent) {
			return +81.39 + this.parentIncomeInfluence();
		}
		else if(age >= 18 && isIndependent) {
			return +250.28;
		}
		else if(age === 17 && isIndependent) {
			return +101.74 + this.parentIncomeInfluence();
		}
		else if(age < 17) {
			return this.parentIncomeInfluence();
		}
		else {
			return 0;
		}
    }

    //// Events

    handleChange(event) {
        this.setState({children: event.target.value});
    }

	handleSubmit(event) {
		const result = this.calculateShit();
		alert('Result is: ' + result); // TODO: set to state or something
		event.preventDefault();

		// Save to local storage when something has been changed
		storage.saveState(this.componentName, this.state)
	}

    render() {
        return (
	 <section className="student-benefits">
		<Checkbox name="independent" />
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

/*         	render() {
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
					<input type="submit" value="Submit"/>
				</form>

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