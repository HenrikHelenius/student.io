import React from 'react';
import './loans.scss';

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
			additional_interest_rate:58, //0,58%
			total_interest_rate:0,
			duration_of_studies:0,
			duration_after_studies:0,
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
		let loanAdditionalCosts = parseInt(this.state.duration_of_studies) * parseInt(this.state.loan_yearly_fixed_fee);
		let interestRate = parseInt(this.state.interest_rate * 100);
		let loanWithInterest = parseInt(this.state.loan);

		console.log('total interestrate', interestRate);
		console.log((loanWithInterest));

		for (var i = 0; i < totalYears; i++) {

			loanWithInterest += (loanWithInterest * (interestRate / 10000));
			console.log(loanWithInterest);
		}

		return loanWithInterest+loanAdditionalCosts;
	}
	// Change name of this
	/*calculateShit() {
		// this state is a string, remember that

		return +this.state.children + 1;
	}*/

	//// Events

	handleSubmit(event) {

		const result = this.yearlyLoanCalculation();
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

				<article className="card">
					<form onSubmit={this.handleSubmit}>
						<h3>Modify your loan</h3>

						<figure>
							<svg id="f8240e4d-0621-4581-86ac-be93a7855785" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1040" height="665.49771" viewBox="0 0 1040 665.49771"><title>key_points</title><circle cx="819.01892" cy="76.24749" r="45.74849" fill="#2f2e41"/><path d="M880.9603,232.425s.80261,26.486-16.85471,34.512,69.024,7.22345,69.024,7.22345-25.68336-31.3016-18.45992-41.73547Z" transform="translate(-80 -117.25115)" fill="#ffb8b8"/><path d="M880.9603,232.425s.80261,26.486-16.85471,34.512,69.024,7.22345,69.024,7.22345-25.68336-31.3016-18.45992-41.73547Z" transform="translate(-80 -117.25115)" opacity="0.1"/><circle cx="818.61761" cy="99.12173" r="31.3016" fill="#ffb8b8"/><path d="M894.60459,261.31877l-26.88727-6.01954-15.6508,16.4534-17.65732,2.40782,23.27555,95.51-.8026,24.07815S831.19878,413.01113,832.804,502.1003s-12.84168,265.66229,4.81563,267.26751,54.57715,9.63126,56.985,2.40781,6.42084-292.14826,6.42084-292.14826-.80261,285.72742,11.23647,288.93784,48.95891,9.63126,53.77454-.80261,0-282.517,0-282.517-.8026-70.62925-29.69639-91.497l-3.21042-18.45992,24.88076-101.12824H937.94526l-12.03907-20.86774-24.88076,8.82866Z" transform="translate(-80 -117.25115)" fill="#2f2e41"/><path d="M829.02756,370.725l-34.3999,58.03226S769.469,454.5709,782.05937,461.7011s25.97612-30.05777,25.97612-30.05777l37.00911-48.72649Z" transform="translate(-80 -117.25115)" fill="#ffb8b8"/><path d="M969.947,371.95857l27.81682,61.45991s22.17074,28.4211,8.87332,34.12509-22.517-32.72937-22.517-32.72937l-31.43249-52.49708Z" transform="translate(-80 -117.25115)" fill="#ffb8b8"/><path d="M844.84307,279.77868l-10.43387-5.61823s-18.45991,30.499-15.24949,81.86572c0,0-3.21042,27.28857,3.21042,28.89378s24.88075,4.81563,25.68336,1.60521,10.43387-62.6032,10.43387-62.6032Z" transform="translate(-80 -117.25115)" fill="#2f2e41"/><path d="M948.37913,278.17347l9.63126-4.013a57.80165,57.80165,0,0,1,12.84168,29.69639c2.40782,18.45991,13.64429,77.85269,4.81563,79.4579s-29.69639,4.81563-29.69639,0-7.22344-60.998-7.22344-60.998Z" transform="translate(-80 -117.25115)" fill="#2f2e41"/><polygon points="849.215 70.96 825.999 58.799 793.939 63.774 787.306 93.071 803.818 92.436 808.43 81.672 808.43 92.258 816.049 91.965 820.471 74.83 823.235 93.071 850.321 92.518 849.215 70.96" fill="#2f2e41"/><circle cx="821.42673" cy="24.07815" r="18.45992" fill="#2f2e41"/><path d="M878.15118,135.71106a18.46428,18.46428,0,0,1,15.6508-18.24751,18.45993,18.45993,0,1,0,0,36.495A18.46431,18.46431,0,0,1,878.15118,135.71106Z" transform="translate(-80 -117.25115)" fill="#2f2e41"/><ellipse cx="497.94403" cy="580.50783" rx="7.87557" ry="5.36068" fill="#e47e81"/><path d="M577.944,697.759s37.409,64.9983,36.42453,74.3795" transform="translate(-80 -117.25115)" fill="#e47e81"/><path d="M602.5552,702.24276v38.02286c-7.83609-10.85778-23.46572-22.038-52.75444-31.11367l52.75444,72.462v.55044s.09965-.05373.28517-.15871l.08985.1234s.07533-.10064.21-.29521C609.2865,778.27364,660.83454,746.17224,602.5552,702.24276Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><rect x="493" y="663.45816" width="547.00001" height="2" fill="#3f3d56"/><path d="M714,781.95962H694.25885V762.21847H714Zm-18.2226-1.51855h16.70405V763.737H695.7774Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><circle cx="1002.3101" cy="634.10351" r="10.07861" fill="#e47e81"/><path d="M1082.3101,780.47064a29.116,29.116,0,1,1,29.116-29.116A29.14864,29.14864,0,0,1,1082.3101,780.47064Zm0-55.99227a26.87629,26.87629,0,1,0,26.87629,26.87629A26.90708,26.90708,0,0,0,1082.3101,724.47837Z" transform="translate(-80 -117.25115)" fill="#2f2e41"/><rect x="36" y="40.14715" width="673" height="402" fill="#e47e81"/><polygon points="456.48 40.147 36 328.807 36 259.667 355.77 40.147 456.48 40.147" opacity="0.1"/><polygon points="658 40.147 658 47.137 82.6 442.147 36 442.147 36 405.007 567.48 40.147 658 40.147" opacity="0.1"/><rect x="93.37646" y="371.14715" width="2" height="71" fill="#3f3d56"/><circle cx="94.5" cy="371.14715" r="25" fill="#3f3d56"/><rect x="232.37646" y="310.14715" width="2" height="132" fill="#3f3d56"/><circle cx="233.5" cy="313.14715" r="25" fill="#3f3d56"/><rect x="371.37646" y="199.14715" width="2" height="243" fill="#3f3d56"/><circle cx="372.5" cy="199.14715" r="25" fill="#3f3d56"/><rect x="510.37598" y="272.14715" width="2" height="170" fill="#3f3d56"/><circle cx="511.5" cy="272.14715" r="25" fill="#3f3d56"/><rect x="649.37598" y="127.14715" width="2" height="315" fill="#3f3d56"/><circle cx="650.5" cy="127.14715" r="25" fill="#3f3d56"/><rect x="36" y="370.14715" width="6" height="2" fill="#3f3d56"/><path d="M159.6001,489.3983h-9.40039v-2h9.40039Zm-18.8003,0h-9.3999v-2h9.3999Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><rect x="89" y="370.14715" width="6" height="2" fill="#3f3d56"/><rect x="36" y="312.14715" width="6" height="2" fill="#3f3d56"/><path d="M291.8667,431.3983H279.7334v-2h12.1333Zm-24.2666,0H255.4668v-2h12.1333Zm-24.2666,0H231.2002v-2h12.1333Zm-24.26709,0h-12.1333v-2h12.1333Zm-24.26661,0H182.6665v-2h12.1333Zm-24.2666,0H158.3999v-2h12.1333Zm-24.2666,0H134.1333v-2h12.1333Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><rect x="224" y="312.14715" width="6" height="2" fill="#3f3d56"/><rect x="36" y="271.14715" width="6" height="2" fill="#3f3d56"/><path d="M556.919,390.3983H544.83789v-2H556.919Zm-24.16211,0H520.67578v-2h12.08106Zm-24.16211,0H496.51367v-2h12.08106Zm-24.1626,0H472.35107v-2h12.08106Zm-24.16211,0H448.189v-2H460.27Zm-24.16211,0H424.02686v-2h12.08105Zm-24.16211,0H399.86475v-2H411.9458Zm-24.16211,0H375.70264v-2h12.08105Zm-24.16211,0H351.54053v-2h12.08105Zm-24.16211,0H327.37842v-2h12.08105Zm-24.16211,0H303.21631v-2h12.08105Zm-24.16211,0H279.0542v-2h12.08105Zm-24.16211,0H254.8916v-2h12.08154Zm-24.16259,0H230.72949v-2h12.08106Zm-24.16211,0H206.56738v-2h12.08106Zm-24.16211,0H182.40527v-2h12.08106Zm-24.16211,0H158.24316v-2h12.08106Zm-24.16211,0H134.08105v-2h12.08106Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><rect x="489" y="271.14715" width="6" height="2" fill="#3f3d56"/><rect x="36" y="198.14715" width="6" height="2" fill="#3f3d56"/><path d="M418.63965,317.3983H406.27979v-2h12.35986Zm-24.71973,0H381.55957v-2h12.36035Zm-24.72021,0H356.83984v-2h12.35987Zm-24.71973,0H332.11963v-2H344.48Zm-24.72021,0H307.3999v-2h12.35987Zm-24.71973,0H282.67969v-2H295.04Zm-24.72022,0H257.96v-2h12.35986Zm-24.72021,0H233.23975v-2h12.35986Zm-24.71973,0H208.52v-2h12.35986Zm-24.72021,0H183.7998v-2h12.35987Zm-24.71973,0H159.08008v-2h12.35986Zm-24.72021,0H134.35986v-2h12.35987Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><rect x="351" y="198.14715" width="6" height="2" fill="#3f3d56"/><rect x="115.99998" y="245.38852" width="6.00003" height="2.00001" transform="translate(-80.84145 -116.84297) rotate(-0.19583)" fill="#3f3d56"/><path d="M133.82715,247.34019l-.00684-2,11.82373-.03857.00684,2Zm23.647-.07666-.00683-2L169.291,245.225l.00683,2Zm23.647-.07715-.00683-2,11.82373-.03857.00683,2Zm23.64746-.07666-.00683-2,11.82324-.03857.00684,2Zm23.647-.07715-.00684-2,11.82324-.03857.00684,2Zm23.647-.07666-.00684-2,11.82373-.03857.00684,2Zm23.647-.07715-.00683-2,11.82373-.03857.00683,2Zm23.647-.07666-.00684-2,11.82373-.03857.00684,2Zm23.647-.07714-.00684-2,11.82373-.03858.00684,2Zm23.64746-.07666-.00684-2,11.82325-.03858.00683,2Zm23.647-.07715-.00683-2,11.82324-.03858.00683,2Zm23.647-.07666-.00683-2,11.82373-.03858.00683,2Zm23.647-.07715-.00684-2,11.82373-.03858.00684,2Zm23.647-.07666-.00684-2,11.82373-.03858.00684,2Zm23.64746-.07715-.00684-2,11.82325-.03857.00683,2Zm23.647-.07666-.00683-2,11.82324-.03857.00684,2Zm23.647-.07715-.00684-2,11.82324-.03857.00684,2Zm23.647-.07666-.00684-2,11.82373-.03857.00684,2Zm23.64648-.07715-.00586-2,11.82325-.03857.00586,2Zm23.64746-.07666-.00586-2,11.82325-.03857.00586,2Zm23.64649-.07715-.00586-2,11.82422-.03857.00586,2Zm23.64746-.07666-.00586-2,11.82324-.03857.00586,2Zm23.64648-.07714-.00586-2,11.82422-.03858.00586,2Zm23.64746-.07666-.00585-2,11.82324-.03858.00586,2Zm23.64747-.07715-.00586-2,11.82324-.03858.00586,2Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><rect x="724.99998" y="243.40806" width="6.00003" height="2.00001" transform="translate(-80.71291 -115.11729) rotate(-0.16786)" fill="#3f3d56"/><rect y="118.14715" width="20" height="20" fill="#3f3d56"/><rect y="189.14715" width="20" height="20" fill="#3f3d56"/><rect y="262.14715" width="20" height="20" fill="#3f3d56"/><rect y="303.14715" width="20" height="20" fill="#3f3d56"/><rect y="361.14715" width="20" height="20" fill="#3f3d56"/><rect x="1019.28579" y="414.64569" width="52" height="52" transform="matrix(-0.25414, 0.96717, -0.96717, -0.25414, 1657.11743, -575.58264)" fill="#e47e81"/><path d="M1003.167,462.68122a12,12,0,1,1,15.4607,6.99764A12.01375,12.01375,0,0,1,1003.167,462.68122Zm20.58681-7.7578a10,10,0,1,0-5.83137,12.88391A10.01115,10.01115,0,0,0,1023.7538,454.92342Z" transform="translate(-80 -117.25115)" fill="#3f3d56"/><ellipse cx="782" cy="655.14715" rx="17" ry="9" fill="#2f2e41"/><ellipse cx="860" cy="655.14715" rx="17" ry="9" fill="#2f2e41"/><path d="M630.17236,341.66975a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,630.17236,341.66975Zm0-22a10,10,0,1,0,10,10A10.01114,10.01114,0,0,0,630.17236,319.66975Z" transform="translate(-80 -117.25115)" fill="#fff"/><path d="M363.17236,522.66975a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,363.17236,522.66975Zm0-22a10,10,0,1,0,10,10A10.01114,10.01114,0,0,0,363.17236,500.66975Z" transform="translate(-80 -117.25115)" fill="#fff"/><path d="M245.17236,231.66975a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,245.17236,231.66975Zm0-22a10,10,0,1,0,10,10A10.01114,10.01114,0,0,0,245.17236,209.66975Z" transform="translate(-80 -117.25115)" fill="#fff"/></svg>
						</figure>

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
						<label>
							Amount of student loan
							<input
								type="number"
								min="1"
								max="100000"
								placeholder="€"
								onChange={e => this.setState({loan: e.target.value})}
								value={this.state.loan}
							/>
						</label>
						<label>
							Interest rate %
							<input
								type="number"
								min="0"
								max="100"
								step="0.1"
								placeholder="%"
								onChange={e => this.setState({interest_rate: e.target.value})}
								value={this.state.interest_rate}
							/>
						</label>
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

						<input type="submit" value="Calculate"/>
					</form>

					<p>
						Total loan: <b>{this.state.loan}</b>
					</p>
					<p>
						Your total cost of loan: <b>{this.state.total_loan.toFixed(2)}</b>
					</p>
					<p>
						Hyvitys: <b>{this.state.refund}</b>
					</p>
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

export default Loans;
