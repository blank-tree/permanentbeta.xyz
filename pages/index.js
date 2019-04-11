import React, {Component} from 'react';
import Intro from '../components/intro';
import Para from '../components/para';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import '../styles/styles.scss';

export default class MyIndex extends Component {

	static async getInitialProps({req}) {
		
		const permanentBeta = await require(`../content/permanentbeta.md`);
		return {permanentBeta};
	}

	render() {

		const {permanentBeta} = this.props;

		return(

			<div>
				<h1>Permanent Beta</h1>
				<Para title="test1" paragraph="<p>mein text</p>" />
				<ReactMarkdown source={permanentBeta} />
			</div>

			);
	}
}