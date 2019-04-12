import React, {Component} from 'react';

export default class Intro extends Component {
	render() {
		let {title} = this.props;

		return(
			<article id="intro">
				<h1>{title}</h1>
			</article>
		);
	}
}