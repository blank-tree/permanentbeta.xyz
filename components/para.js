import React, {Component} from 'react';

export default class Para extends Component {

	render() {
		let {title, paragraph} = this.props;

		return (
			<article>
				<h2>{title}</h2>
				<div dangerouslySetInnerHTML={{__html: paragraph}} />
			</article>
		);
	}

}