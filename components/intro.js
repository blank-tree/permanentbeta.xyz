import React, {Component} from 'react';

export default class Intro extends Component {
	render() {
		let {title} = this.props;

		return(
			<article id="intro">
				<h1 className="glitch" data-text={title}>{title}</h1>
			</article>
		);
	}
}