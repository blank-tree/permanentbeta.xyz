import React, {Component} from 'react';

export default class Footer extends Component {
	render() {
		let {
			comeBack, 
			latestCommitDate, 
			latestCommitAuthor, 
			latestCommitMessage} = this.props;

		return(
			<footer>
				<p>
					Latest commit: <span>{latestCommitDate}</span> <br />
					Latest commit author: <span>{latestCommitAuthor}</span> <br />
					Latest commit message: <span>{latestCommitMessage}</span>
				</p>

				<p>{comeBack}</p>
				<p>&copy; 2019 – Fernando Obieta</p>
			</footer>
		)
	}
}