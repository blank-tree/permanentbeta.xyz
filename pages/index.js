import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown';

import Intro from '../components/intro';
// import Para from '../components/para';
import ContentExport from '../components/contentexport';
import Footer from '../components/footer';

import {Grid, Image} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
import '../styles/styles.scss';

export default class MyIndex extends Component {

	static async getInitialProps({req}) {
		const permanentBeta = await require(`../content/permanentbeta.md`);
		const repoRes = await fetch('https://api.github.com/repos/blank-tree/permanentbeta.xyz/commits/master');
		const repoJson = await repoRes.json();

		return {
			permanentBeta: permanentBeta,
			latestCommitDate: repoJson.commit.committer.date,
			latestCommitAuthor: repoJson.commit.committer.name,
			latestCommitMessage: repoJson.commit.message
		};
	}

	render() {

		const {
			permanentBeta, 
			latestCommitDate, 
			latestCommitAuthor, 
			latestCommitMessage } = this.props;
		const comeBack = "come back another time. who knows what you'll find...";

		return(

			<Grid container columns={1}>
				<Grid.Column>
					<Intro title="Permanent Beta" />
					<ContentExport />
					<Footer 
						comeBack={comeBack}
						latestCommitDate={latestCommitDate}
						latestCommitAuthor={latestCommitAuthor}
						latestCommitMessage={latestCommitMessage}
					/>
				</Grid.Column>
			</Grid>
			);
	}
}

/*
<Para title="test1" paragraph="<p>mein text</p>" />
<ReactMarkdown source={permanentBeta.default} />
*/