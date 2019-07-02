import React from 'react';
import './bank.scss';

class Bank extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			interest: 0,
			startBalance: 0,
			yearsToGrow: 0,
			monthlyContribution: 0,
			result1: 0
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		const result = this.compoundInterest()
		this.setState({ result1: result })
		event.preventDefault();
		// Save to local storage when something has been changed

	}

	componentDidMount() {
	}

	compoundInterest() {
		const monthlyRate = +this.state.interest / 1200;
		const monthsToGrow = +this.state.yearsToGrow * 12;
		console.log(monthsToGrow)
		let start = +this.state.startBalance;
		console.log(this.state.startBalance)
		for (var i = 0; i < monthsToGrow; i++) {
			start = start * (1 + monthlyRate) + +this.state.monthlyContribution
			console.log(start)
		}
		return Math.round(start * 100) / 100;
	}

	//// Own business logic

	render() {
		return (
			<section className="bank">

				<article className="card">
					<h3>Banking</h3>

					<figure>
						<svg id="bca70d0a-57dd-451b-a82c-bb6927f27458" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="798.68127" height="647.00861" viewBox="0 0 798.68127 647.00861"><title>predictive analytics</title><polygon points="126.832 0 74.02 103.009 84.681 103.009 84.681 187.009 30.953 187.009 0 247.381 383.53 444.017 510.363 196.636 126.832 0" fill="#f2f2f2" /><rect x="115.68127" y="67.00861" width="588" height="295" fill="#3f3d56" /><rect x="198.18127" y="173.00861" width="434" height="1" fill="#e47e81" opacity="0.3" /><rect x="198.68127" y="198.00861" width="434" height="1" fill="#e47e81" opacity="0.3" /><rect x="198.68127" y="248.00861" width="434" height="1" fill="#e47e81" opacity="0.3" /><rect x="198.68127" y="270.00861" width="434" height="1" fill="#e47e81" opacity="0.3" /><rect x="198.68127" y="223.00861" width="434" height="1" fill="#e47e81" opacity="0.3" /><ellipse cx="566.68127" cy="630.00861" rx="186" ry="17" fill="#3f3d56" /><polygon points="210.722 270.733 209.342 269.285 273.943 207.712 330.889 248.674 376.94 197.618 397.133 214.782 452.062 181.824 513.076 222.833 608.837 168.364 609.825 170.102 512.988 225.184 452.002 184.193 396.931 217.235 377.124 200.399 331.175 251.343 274.121 210.305 210.722 270.733" fill="#e47e81" /><path d="M597.416,722.34221c4.7,17.37388,20.79838,28.134,20.79838,28.134s8.47828-17.40854,3.77832-34.78241-20.79838-28.134-20.79838-28.134S592.716,704.96833,597.416,722.34221Z" transform="translate(-200.65936 -126.4957)" fill="#3f3d56" /><path d="M604.32226,718.60838c12.89676,12.55447,14.472,31.85362,14.472,31.85362s-19.33453-1.05567-32.23129-13.61015-14.472-31.85362-14.472-31.85362S591.42551,706.0539,604.32226,718.60838Z" transform="translate(-200.65936 -126.4957)" fill="#e47e81" /><circle cx="765.18127" cy="53.50861" r="33.5" fill="#e47e81" opacity="0.4" /><circle cx="703.18127" cy="69.50861" r="23.5" fill="#e47e81" opacity="0.4" /><circle cx="674.18127" cy="500.50861" r="12.5" fill="#e47e81" opacity="0.4" /><circle cx="461.18127" cy="565.50861" r="9.5" fill="#e47e81" opacity="0.4" /><circle cx="429.18127" cy="439.50861" r="12.5" fill="#e47e81" opacity="0.4" /><circle cx="608.18127" cy="173.50861" r="13" fill="#e47e81" /><path d="M724.37318,535.47006l-11.02051,1.2245s-4.898,22.041,0,51.429,11.02051,58.776,11.02051,58.776,4.898,95.51108,7.347,96.73559,24.49,8.5715,25.71453,1.2245,1.2245-175.10365,1.2245-175.10365l17.143,80.81707s2.449,101.63358,7.347,101.63358,20.81652-1.2245,20.81652-9.796,3.6735-121.2256,3.6735-121.2256-1.2245-83.26607-6.12251-85.71507S724.37318,535.47006,724.37318,535.47006Z" transform="translate(-200.65936 -126.4957)" fill="#2f2e41" /><path d="M734.16919,739.96173s-11.02051-1.2245-13.46952,0-6.1225,9.796,0,14.694,22.041,12.245,26.939,12.245a25.33121,25.33121,0,0,0,9.796-2.449l-2.449-20.81651Z" transform="translate(-200.65936 -126.4957)" fill="#2f2e41" /><path d="M783.14923,746.08424l1.2245,17.143s15.91851,2.449,17.143,0,13.46951-8.57151,14.694-9.796,2.449-14.694-4.898-15.91851-9.796,2.449-9.796,2.449Z" transform="translate(-200.65936 -126.4957)" fill="#2f2e41" /><path d="M680.29114,432.612s-29.388,28.16352-25.71452,42.85753S687.63815,533.021,687.63815,533.021s28.16352,14.694,31.837,0-19.592-11.02051-19.592-11.02051l-18.36752-44.082,20.81652-29.388Z" transform="translate(-200.65936 -126.4957)" fill="#ffb8b8" /><path d="M811.60481,389.76471s26.7713-17.2156,26.15173-29.04306-16.75849-49.11979-16.75849-49.11979-12.62537-26.24931-17.64456-15.52176,6.59679,22.14672,6.59679,22.14672l7.49747,36.58227-20.37608,19.43862Z" transform="translate(-200.65936 -126.4957)" fill="#ffb8b8" /><circle cx="544.53033" cy="216.72769" r="22.04102" fill="#ffb8b8" /><path d="M734.16919,356.6929l3.6735,23.26552,26.939-4.898s-1.2245-23.26552-1.2245-25.71452S734.16919,356.6929,734.16919,356.6929Z" transform="translate(-200.65936 -126.4957)" fill="#ffb8b8" /><path d="M732.94468,379.95842s30.61253-7.347,34.286-4.898,22.041,4.898,22.041,4.898l20.81652,31.837-6.1225,40.40853s-1.22451,64.89856,1.2245,75.91907,15.91851,12.245-12.245,14.694-33.06153-1.2245-52.65355,3.67351-35.51053-2.449-30.61253-7.347,13.46952-83.26607,3.67351-90.61308-13.46951-45.30654-13.46951-45.30654S732.94468,386.08093,732.94468,379.95842Z" transform="translate(-200.65936 -126.4957)" fill="#d0cde1" /><path d="M785.59823,383.63192l3.6735-3.6735,7.347-7.347s23.87777,10.40825,22.65327,14.08176-9.18376,25.10227-9.18376,25.10227l-11.02051,3.6735Z" transform="translate(-200.65936 -126.4957)" fill="#d0cde1" /><path d="M714.57717,405.67294l-14.694-2.449s-11.02051,12.245-14.694,17.143-11.02051,17.143-11.02051,17.143l25.71453,18.36752,19.592-20.81652Z" transform="translate(-200.65936 -126.4957)" fill="#d0cde1" /><path d="M752.88168,316.52047l-.22588-1.76567a13.87994,13.87994,0,0,0-4.41119.69316,7.24707,7.24707,0,0,1,.27232-3.17286,14.10788,14.10788,0,0,0-4.08291,1.77508l-.89047-3.22237-12.2411,6.03284c-4.39409,2.16556-9.02682,4.5453-11.5387,8.751-2.80037,4.68877-2.313,10.71464-.39873,15.82952s5.09528,9.64134,7.64505,14.471a36.15408,36.15408,0,0,0,3.47432,5.91329c4.62054,5.76,13.61459,6.92368,20.12929,3.44729a11.64883,11.64883,0,0,0,5.57784-5.73993,37.30186,37.30186,0,0,0,1.11419-4.75341c.80584-3.2915,1.7413-10.086,4.41475-12.16826,1.17642-.9163,3.50888,2.12126,4.48377.99292,2.50534-2.89966,1.97954-7.37149.4236-10.87356a79.34039,79.34039,0,0,0-5.22316-10.1877C760.56393,321.22992,752.85458,316.30868,752.88168,316.52047Z" transform="translate(-200.65936 -126.4957)" fill="#2f2e41" /><rect x="12.68127" y="115.00861" width="64" height="64" fill="#3f3d56" /></svg>
					</figure>

					<p>
						This compound calculator will count the investment value for the years of your upcoming investment.
					</p>

					<form onSubmit={this.handleSubmit}>
						<label htmlFor="">Start balance</label>
						<input
							type="number"
							min="0"
							placeholder="Start balance"
							onChange={e => this.setState({ startBalance: e.target.value })}
							value={this.state.startBalance}
						/>
						<label htmlFor="">Interest Rate</label>
						<input
							type="number"

							placeholder="Interest rate"
							onChange={e => this.setState({ interest: e.target.value })}
							value={this.state.interest}
						/>
						<label htmlFor="">Years to grow</label>
						<input
							type="number"
							min="0"
							max="50"
							placeholder="Years to grow"
							onChange={e => this.setState({ yearsToGrow: e.target.value })}
							value={this.state.yearsToGrow}
						/>
						<label htmlFor="">Monthly contribution</label>
						<input
							type="number"
							min="0"

							placeholder="Monthly contribution"
							onChange={e => this.setState({ monthlyContribution: e.target.value })}
							value={this.state.monthlyContribution}
						/>
						<input type="submit" value="Calculate" />
					</form>

					<p>
						Total income: <b>{this.state.result}€</b>
					</p>

				</article>

			</section>
		);
	}
}

export default Bank;
