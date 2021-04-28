import 'css/navbar.css'
import pdf from 'resume.pdf'
import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav(props) {
	return (
		<div id="navBox">
			<Link to="/" className="navlinks"><p>Home</p></Link>
			<Link to="/projects" className="navlinks"><p>Projects</p></Link>
			<Link to="/work" className="navlinks"><p>Work</p></Link>
			<Link to="/contact" className="navlinks"><p>Contact</p></Link>
			<a href={pdf} target="_blank" rel='noreferrer' className="navlinks"><p>Resume</p></a>
		</div>
	);
}