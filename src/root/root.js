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
					One application for checking quickly your all your student benefits. The app let's you calculate your current student benefits, the amount of housing benefits and check your student loan status.
					Student.io is your simplest way to check all your student financials.
				</p>
			</header>

			<main className="grid">
				<Bank></Bank>
				<HousingBenefits></HousingBenefits>
				<Loans></Loans>
				<StudentBenefits></StudentBenefits>
			</main>
		</div>
	);
}

export default Root;
