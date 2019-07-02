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
					<h3>Housing benefits</h3>

					<figure>
						<svg id="a64b19f6-1f12-4f18-b71c-01acbbb1e99d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1126.18239" height="694.22222" viewBox="0 0 1126.18239 694.22222"><title>back_home</title><rect x="161.18239" y="173.90779" width="140" height="2" fill="#f2f2f2"/><rect x="199.18239" y="155.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="260.18239" y="155.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="113.18239" y="73.90779" width="140" height="2" fill="#f2f2f2"/><rect x="213.18239" y="75.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="152.18239" y="75.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="335.18239" y="213.90779" width="140" height="2" fill="#f2f2f2"/><rect x="373.18239" y="195.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="434.18239" y="195.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="287.18239" y="113.90779" width="140" height="2" fill="#f2f2f2"/><rect x="387.18239" y="115.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="326.18239" y="115.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="280.18239" y="553.90779" width="140" height="2" fill="#f2f2f2"/><rect x="318.18239" y="535.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="379.18239" y="535.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="232.18239" y="453.90779" width="140" height="2" fill="#f2f2f2"/><rect x="332.18239" y="455.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="271.18239" y="455.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="216.18239" y="337.90779" width="140" height="2" fill="#f2f2f2"/><rect x="254.18239" y="319.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="315.18239" y="319.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="168.18239" y="237.90779" width="140" height="2" fill="#f2f2f2"/><rect x="268.18239" y="239.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="207.18239" y="239.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="115.18239" y="489.90779" width="140" height="2" fill="#f2f2f2"/><rect x="153.18239" y="471.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="214.18239" y="471.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="67.18239" y="389.90779" width="140" height="2" fill="#f2f2f2"/><rect x="167.18239" y="391.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="106.18239" y="391.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="812.18239" y="173.90779" width="140" height="2" fill="#f2f2f2"/><rect x="850.18239" y="155.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="911.18239" y="155.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="764.18239" y="73.90779" width="140" height="2" fill="#f2f2f2"/><rect x="864.18239" y="75.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="803.18239" y="75.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="986.18239" y="213.90779" width="140" height="2" fill="#f2f2f2"/><rect x="1024.18239" y="195.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="1085.18239" y="195.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="938.18239" y="113.90779" width="140" height="2" fill="#f2f2f2"/><rect x="1038.18239" y="115.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="977.18239" y="115.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="931.18239" y="553.90779" width="140" height="2" fill="#f2f2f2"/><rect x="969.18239" y="535.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="1030.18239" y="535.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="883.18239" y="453.90779" width="140" height="2" fill="#f2f2f2"/><rect x="983.18239" y="455.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="922.18239" y="455.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="867.18239" y="337.90779" width="140" height="2" fill="#f2f2f2"/><rect x="905.18239" y="319.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="966.18239" y="319.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="819.18239" y="237.90779" width="140" height="2" fill="#f2f2f2"/><rect x="919.18239" y="239.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="858.18239" y="239.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="766.18239" y="489.90779" width="140" height="2" fill="#f2f2f2"/><rect x="804.18239" y="471.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="865.18239" y="471.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="718.18239" y="389.90779" width="140" height="2" fill="#f2f2f2"/><rect x="818.18239" y="391.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="757.18239" y="391.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="362.93389" width="194.5" height="276" fill="#3f3d56"/><rect x="612.43389" y="331" width="194.5" height="276" fill="#3f3d56"/><rect x="612.43389" width="194.5" height="276" fill="#3f3d56"/><rect x="362.93389" y="331" width="194.5" height="276" fill="#3f3d56"/><rect x="95.42433" y="606.131" width="963.50956" height="2.24072" fill="#2f2e41"/><path d="M150.8427,693.88889h-11v93s71,23,140,0v-93Z" transform="translate(-36.9088 -102.88889)" fill="#3f3d56"/><ellipse cx="171.93389" cy="591.5" rx="69" ry="10.5" fill="#3f3d56"/><ellipse cx="171.93389" cy="591.5" rx="69" ry="10.5" opacity="0.1"/><path d="M289.05074,582.775c-17.40643,64.34464-77.02739,104.19489-77.02739,104.19489s-31.39956-64.473-13.99312-128.81765,77.02739-104.19488,77.02739-104.19488S306.45718,518.43035,289.05074,582.775Z" transform="translate(-36.9088 -102.88889)" fill="#3f3d56"/><path d="M130.70076,582.775c17.40643,64.34464,77.02739,104.19489,77.02739,104.19489s31.39956-64.473,13.99313-128.81765-77.0274-104.19488-77.0274-104.19488S113.29433,518.43035,130.70076,582.775Z" transform="translate(-36.9088 -102.88889)" fill="#e47e81"/><path d="M156.27828,568.94663c47.76351,46.49584,53.59747,117.97078,53.59747,117.97078s-71.606-3.90972-119.36948-50.40557S36.9088,518.54106,36.9088,518.54106,108.51478,522.45079,156.27828,568.94663Z" transform="translate(-36.9088 -102.88889)" fill="#3f3d56"/><path d="M263.47322,568.94663c-47.7635,46.49584-53.59747,117.97078-53.59747,117.97078s71.606-3.90972,119.36948-50.40557S382.8427,518.54106,382.8427,518.54106,311.23672,522.45079,263.47322,568.94663Z" transform="translate(-36.9088 -102.88889)" fill="#3f3d56"/><circle cx="172.93389" cy="351" r="22" fill="#e47e81"/><circle cx="439.93389" cy="148" r="3" fill="#fff"/><circle cx="425.93389" cy="77" r="35" fill="#fff"/><circle cx="481.93389" cy="125" r="1" fill="#fff"/><circle cx="657.93389" cy="175" r="1" fill="#fff"/><circle cx="646.93389" cy="474" r="1" fill="#fff"/><circle cx="435.93389" cy="543" r="1" fill="#fff"/><circle cx="730.93389" cy="210" r="1" fill="#fff"/><circle cx="720.93389" cy="126" r="1" fill="#fff"/><circle cx="686.93389" cy="396" r="1" fill="#fff"/><circle cx="632.93389" cy="246" r="1" fill="#fff"/><circle cx="640.93389" cy="105" r="1" fill="#fff"/><circle cx="731.93389" cy="48" r="1" fill="#fff"/><circle cx="437.93389" cy="453" r="1" fill="#fff"/><circle cx="523.93389" cy="529" r="1" fill="#fff"/><circle cx="413.93389" cy="378" r="1" fill="#fff"/><circle cx="438.93389" cy="246" r="1" fill="#fff"/><polygon points="438.934 247 557.434 195.93 557.434 209.45 438.934 247" fill="#fff" opacity="0.1"/><polygon points="806.934 88.41 806.934 130.38 612.434 192.02 612.434 172.23 806.934 88.41" fill="#fff" opacity="0.1"/><path d="M533.88268,497.86887l60.46-33.31v4.63C560.5327,485.55887,535.06267,497.32889,533.88268,497.86887Z" transform="translate(-36.9088 -102.88889)" fill="#fff" opacity="0.1"/><path d="M650.02269,433.88889h15.25q-7.935,4.095-15.93,8.13v-7.75Z" transform="translate(-36.9088 -102.88889)" fill="#fff" opacity="0.1"/><path d="M769.8427,367.88889c-.46,2.65-3.95,6.41-9.76,11h-10.21Z" transform="translate(-36.9088 -102.88889)" fill="#fff" opacity="0.1"/><path d="M843.8427,547.24887v7.06c-51.92,25.91-99.35,47.82-100.96,48.56Z" transform="translate(-36.9088 -102.88889)" fill="#fff" opacity="0.1"/><path d="M726.8427,557.07638a10.385,10.385,0,0,0-6.03631-9.42611l.32033-4.08438H698.78245l2.59817,26.50134h17.66756l.23521-2.99931A10.38963,10.38963,0,0,0,726.8427,557.07638Zm-7.43524,8.41043,1.23756-15.77875a10.35208,10.35208,0,0,1-1.23756,15.77875Z" transform="translate(-36.9088 -102.88889)" fill="#e47e81"/><path id="f4ac3ff5-258c-4399-9248-8391ae08b365" data-name="right hand" d="M702.75265,535.50626s26.42006,18.87147,17.61337,26.42006S693.946,539.28056,693.946,539.28056Z" transform="translate(-36.9088 -102.88889)" fill="#ffb9b9"/><path id="bf1f5e13-8e3a-4741-a85e-0bb4d1014665" data-name="left leg" d="M580.71712,564.44252s5.03239,62.90491,6.29049,71.7116,2.5162,88.06687,5.0324,96.87356S597.0724,763.222,597.0724,763.222h15.09718s-1.2581-39.001,2.51619-54.09822,2.5162-56.61442,2.5162-56.61442,7.54859-74.22779,3.77429-84.29258S580.71712,564.44252,580.71712,564.44252Z" transform="translate(-36.9088 -102.88889)" fill="#ffb9b9"/><path id="fa7b0e16-c331-457f-a12f-a08f2c008952" data-name="left shoe" d="M600.84669,759.44774s-6.29049,3.77429-6.29049,6.29049,1.2581,8.80669,0,11.32288-10.06478,12.581-5.03239,15.09718,27.67816,0,27.67816,0-1.2581-17.61337-2.5162-18.87147,1.2581-13.83908,1.2581-13.83908Z" transform="translate(-36.9088 -102.88889)" fill="#2f2e41"/><path id="f4024e73-c1c2-4428-8611-ad66221c5a25" data-name="right leg" d="M676.89143,562.90084s1.59829,63.08564,1.27155,71.97573,6.74174,87.84449,5.16385,96.86665-1.83521,30.55578-1.83521,30.55578l-15.01378,1.5847s-2.84264-38.91766-8.18078-53.53526-8.44489-56.03756-8.44489-56.03756-15.29829-73.02539-12.60131-83.43075S676.89143,562.90084,676.89143,562.90084Z" transform="translate(-36.9088 -102.88889)" fill="#ffb9b9"/><path id="a008d2cf-381c-4d23-b52a-803eac2543b7" data-name="right shoe" d="M677.342,758.94173s6.65192,3.09316,6.916,5.59545-.32674,8.8901,1.18852,11.26034,11.32976,11.455,6.58928,14.48555-27.52526,2.90526-27.52526,2.90526-.59766-17.64813.52144-19.03133-2.70379-13.63058-2.70379-13.63058Z" transform="translate(-36.9088 -102.88889)" fill="#2f2e41"/><path id="f779e54b-d4cb-4215-8e38-13737b8c9741" data-name="pants" d="M598.3305,470.08516s-10.06479,1.25809-13.83908,22.64576-17.61338,75.48589-6.29049,79.26019,45.29153,11.32288,46.54963,8.80669,3.77429-8.80669,3.77429-8.80669S624.75056,583.314,629.783,583.314s54.09822-7.54859,52.84013-11.32288-3.7743-31.45246-3.7743-31.45246-7.54859-46.54963-15.09718-54.09822a20.63209,20.63209,0,0,1-6.29049-16.35527Z" transform="translate(-36.9088 -102.88889)" fill="#2f2e41"/><path id="ed7973b0-4ac2-4dfd-9025-75a9fc26774c" data-name="left hand" d="M579.459,460.02037s16.35528-3.7743,18.87148,1.2581-6.29049,12.581-10.06479,12.581-10.06478-3.77429-10.06478-3.77429Z" transform="translate(-36.9088 -102.88889)" fill="#ffb9b9"/><circle id="a0973ec9-0189-41bb-9fc7-749accd47115" data-name="head" cx="600.45261" cy="225.89676" r="22.64577" fill="#ffb9b9"/><path id="fee270f8-9d28-4acf-9daf-d285b710d8cb" data-name="neck" d="M623.68,344.30147s-2.70377,20.10344-5.22,20.10344,18.87147,11.32288,18.87147,11.32288l16.35528-2.5162,5.03239-7.54859s-7.80423-12.122-7.80423-22.18683S623.68,344.30147,623.68,344.30147Z" transform="translate(-36.9088 -102.88889)" fill="#ffb9b9"/><path id="a5149c73-902a-4296-b98c-0ab474a0aab0" data-name="upper body" d="M628.52485,364.40491s-3.77429-2.5162-5.03239-2.5162H613.42768c-1.2581,0-17.61338,3.77429-17.61338,3.77429l-10.06479,56.61442s17.61338,28.93626,5.0324,51.582c0,0,3.77429-2.5162,21.38767-1.2581s49.06583,5.03239,50.32392,5.03239,1.2581-10.06478,0-12.581,1.2581-1.2581,1.2581-7.54859,3.7743-17.61337,3.7743-17.61337l17.61337-64.163s-22.64577-12.581-26.42006-11.32288-15.09718,5.03239-17.61337,3.77429S628.52485,364.40491,628.52485,364.40491Z" transform="translate(-36.9088 -102.88889)" fill="#ff6584"/><path id="b7aca075-39de-44d0-b6a6-9c2227e62ba9" data-name="left arm" d="M599.58859,366.9211l-3.77429-1.2581s-7.54859-1.25809-16.35528,6.2905-41.51724,30.19435-41.51724,30.19435-12.581,10.06479-8.80668,21.38767,10.06478,39.001,28.93625,37.743c0,0,11.32289,15.09718,17.61338,12.581s11.32288-12.581,7.54859-13.83908-13.83908-13.83908-13.83908-13.83908l12.581-23.90387h3.77429l13.83908-7.54859Z" transform="translate(-36.9088 -102.88889)" fill="#ff6584"/><path id="e668ed40-8c90-4e88-adc6-99915460fb10" data-name="right arm" d="M675.07449,374.46969l10.06478,1.2581s8.80669,3.7743,7.54859,20.12957,7.54859,90.58307,3.7743,99.38976c0,0,12.581,42.77534,10.06478,44.03344s-17.61337,8.80668-16.35527,3.77429-13.83909-40.25914-13.83909-40.25914-17.61337-18.87147-10.06478-45.29154V436.1165Z" transform="translate(-36.9088 -102.88889)" fill="#ff6584"/><path d="M696.07685,349.11944c-2.80675-3.96939-6.25947-7.43819-9.22157-11.293-6.82919-8.88775-9.19176-20.7304-18.35621-27.546-9.06824-6.74406-23.45862-13.38193-34.80642-12.8501-14.95536.70088-26.81917,12.303-37.12888,23.15952q-11.81783,12.44464-23.63564,24.88925c-5.69963,6.00192-11.60973,12.37378-13.66391,20.3918-1.9744,7.70607-.04776,15.98467,3.567,23.071a56.15191,56.15191,0,0,0,15.44317,18.43539c7.91189-10.89439,18.996-25.9372,18.996-25.9372l2.58048,37.41712c13.40409,4.44229,27.80284,5.31575,41.92837,4.33364l4.18393-15.34112,4.39136,14.49159c16.8803-2.2379,33.83867-8.06634,44.28822-21.23892C706.19546,386.539,706.809,364.29755,696.07685,349.11944Z" transform="translate(-36.9088 -102.88889)" fill="#2f2e41"/><path d="M601.81394,345.341c-2.33439-11.72212.18784-23.867,8.02939-33.16768,14.48709-17.18284,41.60784-18.148,60.57591-2.15577a47.75333,47.75333,0,0,1,15.5487,24.32628A47.4946,47.4946,0,0,0,669.825,307.44272c-18.96808-15.99224-46.08883-15.02707-60.57592,2.15577C600.83143,319.58252,598.54286,332.84344,601.81394,345.341Z" transform="translate(-36.9088 -102.88889)" fill="#2f2e41"/><path d="M557.24767,400.63619c-2.33439-11.72212.18784-23.867,8.02939-33.16768,14.48709-17.18285,41.60784-18.148,60.57591-2.15577a47.75329,47.75329,0,0,1,15.5487,24.32628,47.4946,47.4946,0,0,0-16.14292-26.90111c-18.96808-15.99224-46.08883-15.02707-60.57592,2.15577C556.26516,374.87771,553.97659,388.13863,557.24767,400.63619Z" transform="translate(-36.9088 -102.88889)" fill="#2f2e41"/><path d="M658.32014,339.055c11.89484-1.17063,23.73288,2.53339,32.21759,11.25134,15.67531,16.10623,13.96945,43.19048-3.81015,60.49439a47.75335,47.75335,0,0,1-25.7371,13.08175,47.49449,47.49449,0,0,0,28.35787-13.41995c17.7796-17.30392,19.48547-44.38817,3.81015-60.4944C684.05042,340.60969,671.07874,337.02847,658.32014,339.055Z" transform="translate(-36.9088 -102.88889)" fill="#2f2e41"/><path d="M714.57986,499.29421a5.86707,5.86707,0,0,0-6.19121,2.43233,7.99632,7.99632,0,0,0-.99939,2.46623,13.52019,13.52019,0,0,0,4.298,13.22763,25.95221,25.95221,0,0,1,2.74926,2.3334,7.8174,7.8174,0,0,1,1.51415,7.03828,11.85329,11.85329,0,0,1-4.12668,6.10266,3.37036,3.37036,0,0,0-1.01467,1.08578c-.67635,1.44778,1.06814,2.82525,1.51208,4.36031" transform="translate(-36.9088 -102.88889)" fill="#fff" opacity="0.1"/></svg>
					</figure>

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

					<p>
						Total income: <b>{this.state.total}</b>
					</p>
					<p>
						Your total housing benefit is: <b>{this.state.housing}</b>
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
