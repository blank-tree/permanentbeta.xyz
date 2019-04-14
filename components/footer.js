import React, {Component} from 'react';

export default class Footer extends Component {
	render() {
		let {comeBack} = this.props;

		return(
			<footer>
				<p>{comeBack}</p>
				<p>&copy; 2019 – Fernando Obieta</p>
			</footer>
		)
	}
}