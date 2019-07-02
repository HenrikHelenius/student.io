import React from 'react';
import './loans-visualiser.scss';

class LoansVisualiser extends React.Component {
	render() {
		return (
			<article className={this.props.state.editHidden ? 'card' : 'card hidden'}>

				<p>
					Total loan {this.props.state.loan}
					<br />
					Your total cost of loan  {this.props.state.total_loan}
					<br />
					Hyvitys {this.props.state.refund}
				</p>

			</article>
		);
	}
}

/* Handling inputs
1. add to this.state a property x
2. copy input, change type and other needed attributes
3. change value={this.state.x}
4. change onChange={e => this.setState({x: e.target.value})}
 */

export default LoansVisualiser;
