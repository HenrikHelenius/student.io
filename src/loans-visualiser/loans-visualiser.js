import React from 'react';
import './loans-visualiser.scss';

class LoansVisualiser extends React.Component {
	render() {
		return (
			<article className="card">

				<p>
					Total loans: {this.props.state.total_loan}
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
