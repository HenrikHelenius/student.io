import React from 'react';
import './root.scss';
// Components
import StudentBenefits from "../student-benefits/student-benefits";
import Loans from "../loans/loans";
import HousingBenefits from "../housing-benefits/housing-benefits";

function Root() {
	return (
		<main className="root">
			<p>Make new components, just add them here</p>
			<br/><br/>
			<StudentBenefits></StudentBenefits>
			<br/><br/><br/><br/>
			<HousingBenefits></HousingBenefits>
			<br/><br/><br/><br/>
			<Loans></Loans>
		</main>
	);
}

export default Root;
