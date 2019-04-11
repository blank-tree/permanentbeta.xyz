import React, {Component} from 'react';

export default class Intro extends Component {
	render() {
		let {title, introductionText} = this.props;

		return(
			<article id="introduction">
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={{__html: introductionText}} />
			</article>
		);
	}
}