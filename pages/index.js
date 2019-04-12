import React, {Component} from 'react';
import Intro from '../components/intro';
// import Para from '../components/para';
import ContentExport from '../components/contentexport';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import {Grid, Image} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.scss';

export default class MyIndex extends Component {

	static async getInitialProps({req}) {
		
		const permanentBeta = await require(`../content/permanentbeta.md`);
		return {permanentBeta};
	}

	render() {

		const {permanentBeta} = this.props;

		return(

			<Grid container columns={1}>
				<Grid.Column>
					<Intro title="Permanent Beta"/>
					<ContentExport />
				</Grid.Column>
			</Grid>
			);
	}
}

/*
<Para title="test1" paragraph="<p>mein text</p>" />
<ReactMarkdown source={permanentBeta.default} />
*/