import React, {Component} from 'react';
import Para from '../components/para';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import marked from 'marked';

import '../styles/styles.scss';



export default class MyIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			permanentBeta: null
		};
	}

	static getInitialProps() {
		const permanentBetaPath = '../content/permanentbeta.md';

		fetch(permanentBetaPath)
			.then(response => {
				return response.text();
			})
			.then(text => {
				this.setState({
					permanentBeta: marked(text)
				})
			});
	}

	render() {

		const {permanentBeta} = this.state;

		return(

			<div>
				<h1>Permanent Beta</h1>
				<Para title="test1" paragraph="<p>mein text</p>" />
			</div>

			);
	}
}