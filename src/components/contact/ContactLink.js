import React from 'react';

export default function ContactLink(props) {
	return (
		<a href={props.link} target="_blank" rel='noreferrer'>
			<div className="contactLink">
				<div className="text">{props.text}</div>
			</div>
		</a>
	);
}