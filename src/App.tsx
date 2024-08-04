import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import Nav from "./components/Nav"
import Homepage from './components/homepage/Homepage'
import Workpage from './components/work/Workpage';
import ContactPage from './components/contact/Contact';
import ProjectRouter from './components/ProjectRouter';
import Assets from './components/Assets'
import './main.css'
import NotFoundPage from './components/NotFoundPage'
import Sitemap from './components/Sitemap';
import Blog from './components/blog/Blog';

function Redirect() {
	window.location.replace("https://github.com/owenmoogk/")
	return (<></>)
}

export default function App() {

	const [darkMode, setDarkMode] = useState(localStorage.getItem('darkmode') === 'false' ? false : true)

	function toggleDarkMode() {
		localStorage.setItem('darkmode', darkMode ? "false" : "true")
		setDarkMode(darkMode ? false : true)
	}

	function updateDarkMode(darkMode: boolean){
		if (darkMode) document.body.classList.add('dark')
		else document.body.classList.remove('dark')
	}

	useEffect(() => {updateDarkMode(darkMode)}, [darkMode])

	updateDarkMode(darkMode)
	
	return (
		<>
			<div id='backgroundDiv' />
			<Router>
				<Nav toggleDarkMode={toggleDarkMode} />
				<Routes>
					<Route path='/projects/*' element={<ProjectRouter />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/work' element={<Workpage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/assets' element={<Assets />} />
					<Route path='/sitemap' element={<Sitemap />} />
					<Route path='/' element={<Homepage />} />
					<Route path='/404' element={<NotFoundPage />} />
					<Route path='/github' element={<Redirect />} />
					<Route path='*' element={<Navigate to='/404' />} />
				</Routes>
			</Router>
		</>
	);
}