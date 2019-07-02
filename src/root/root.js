import React from 'react';
import './root.scss';
// Components
import StudentBenefits from "../student-benefits/student-benefits";
import Loans from "../loans/loans";
import HousingBenefits from "../housing-benefits/housing-benefits";
import Bank from "../bank/bank";

function Root() {
	return (
		<div className="root">
			<header>
				<h1>Student.io</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque, blanditiis corporis cupiditate dolore dolorum exercitationem id incidunt ipsum maxime minima nulla obcaecati odio pariatur quos recusandae sed vel voluptate.
				</p>
			</header>

			<main className="grid">
				<StudentBenefits></StudentBenefits>
				<HousingBenefits></HousingBenefits>
				<Loans></Loans>
				<Bank></Bank>
			</main>
		</div>
	);
}

export default Root;
