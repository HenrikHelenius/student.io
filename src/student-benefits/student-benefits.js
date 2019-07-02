import React from 'react';
import './student-benefits.scss';
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
			credits: {
				total: 0,
				current: 0,
			},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// Load state
		this.setState(storage.loadState(this.componentName));
	}


	//Only for 300 Yleinen tutkimus (add support for others later)
	//Alempitut., Ylempitut., Yhteensä.
	support = [30, 21, 48];

	//Vuostituloraja lasketaan siten, että tuloja voi olla 667 euroa jokaista 
	//tukikuukautta kohti ja 1 990 euroa jokaista tuetonta kuukautta kohti.
	//Tukikuukaudet = index + 1 ja arvot ovat vuosituloraja euro/kalenterivuos
	vuosituloraja = [22557, 21234, 19911, 18588, 17265, 15942, 14619, 13296, 11973, 10650, 9327, 8004];

	noSupportThisYear() {
		const { credits, ownIncome } = this.state;
		return credits.current < 20 || ownIncome > this.vuosituloraja[0] ;
	}

	//calculates this years supportmonths
	currentSupportMonths() {
		const { credits, ownIncome } = this.state
		const closestToOwnIncome = this.closest(this.vuostituloraja, ownIncome)
		const amountOfSupportLeft = this.vuosituloraja.findIndex(i => i === closestToOwnIncome)
		const creditsPerMonth = credits.current % 9 
		return Math.min(creditsPerMonth, amountOfSupportLeft) ;
	}

//closest array value to num
	closest(array,num){
	var i=0;
		var minDiff=1000;
		var ans;
		for(i in array){
			var m=Math.abs(num-array[i]);
			if(m<minDiff){ 
					minDiff=m; 
					ans=array[i]; 
				}
		}
	return ans;
	}
	
	//TODO
	//Support months left based on credits done
/*	overallSupportMonthsLeft() {
		const { credits } = this.state
		const totalCredits = credits.total
		Math.floor((totalCredits % ))	
}*/

	//// Own business logic

	//1.8.2019 alkaen
	parentIncomeInfluence() {
		const { parentIncome, age, isIndependent } = this.state;
		if (this.noSupportThisYear()) {
			return 0;
		}
		else if (parentIncome < 41400 && isIndependent) {
			if(age < 17) {
				return 100; //not real value
			}
			else if(age === 17) {
				return 100; //not real value
			}
			else if(age > 17) {
				return 36.8; //oppimateriaalilisä
			}
		}
		else if (parentIncome < 41400 && !isIndependent) {
			if(age < 17) {
				return 100; //not real value
			}
			else if(age === 17) {
				return 100; //not real value
			}
			else if(age > 17) {
				return 36.8; //not real value
			}
		}
		else if (parentIncome < 44070 && !isIndependent) {
			if(age < 17) {
				return 80; //not real value
			}
			else if(age === 17) {
				return 60; //not real value
			}
			else if(age > 17) {
				return 25; //not real value
			}
		}
		else if (parentIncome < 64400 && !isIndependent) {
			if(age < 17) {
				return 60; //not real value
			}
			else if(age === 17) {
				return 40; //not real value
			}
			else if(age > 17) {
				return 30; //not real value
			}
		}
		else {
			return 0; //the only real value
		}
	}

	opintoTuki = () => {
		const { children, age, isMarried, isIndependent } = this.state;
		if (children) {
			return +325.28;
		}
		else if (isMarried) {
			return +250.28;
		}
		else if (age >= 17 && age < 20 && !isIndependent) {
			return +38.66 + this.parentIncomeInfluence();
		}
		else if (age >= 20 && !isIndependent) {
			return +81.39 + this.parentIncomeInfluence();
		}
		else if (age >= 18 && isIndependent) {
			return +250.28;
		}
		else if (age === 17 && isIndependent) {
			return +101.74 + this.parentIncomeInfluence();
		}
		else if (age < 17) {
			return this.parentIncomeInfluence();
		} else {
			return 0;
		}
	}

	//// Events

	handleChange(event) {
		this.setState({ children: event.target.value });
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

				<article className="card">
					<form onSubmit={this.handleSubmit}>
						<label>Independent?</label>
						<input
							type="checkbox"
							onChange={e => this.setState({ x: e.target.x })} //todo
							value={this.state.children}
						/>
						<input type="submit" value="Submit" />
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

/*         	render() {
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
