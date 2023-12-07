import React, { useState, useEffect } from 'react';
import ProjectButton from './ProjectButton';
import FeaturedIcon from './FeaturedIcon';

export default function ProjectPage() {

	const [projectData, setProjectData] = useState()

	// function that filters by the type of entry
	function filterProjects(filter) {

		var projectItems = document.getElementsByClassName("featuredIcon");

		// make the button active
		var currentButton = document.getElementsByClassName("active")[0]
		currentButton.classList.remove('active')
		var currentButtonClass = "sort_" + filter
		var chosenButton = document.getElementsByClassName(currentButtonClass)[0]
		chosenButton.classList.add('active')

		// will run through all the elements
		for (const tile of projectItems) {
			var type = tile.getElementsByClassName('type')[0].innerText;

			if (type.toLowerCase().includes(filter.toLowerCase()) || filter === 'all') {
				tile.parentNode.style.display = ''
			}
			else {
				tile.parentNode.style.display = 'none'
			}
		}
	}

	function fetchProjects() {
		var tmpProjectData = []
		fetch(process.env.PUBLIC_URL + '/assets/projectDirectory.json')
			.then(response => response.json())
			.then(projectUrls => {
				var requests = []
				for (const projectUrl of projectUrls) {
					requests.push(fetch(process.env.PUBLIC_URL + '/assets/projects/' + projectUrl + '/' + projectUrl + '.json')
						.then(response => response.json())
						.then(currentProjectData => {
							tmpProjectData.push({ ...currentProjectData.meta, name: projectUrl })
						})
						.catch(error => console.log(projectUrl))
					)
				}
				// once all the loading is done
				Promise.all(requests).then(function () {
					// make sure they are in the proper order, sort by name
					tmpProjectData.sort((a, b) => {
						return (projectUrls.indexOf(a.name) - projectUrls.indexOf(b.name))
					})

					setProjectData(tmpProjectData)
				})
			})
	}

	useEffect(() => {
		fetchProjects()
	}, [])


	function handleResize() {
		var computedStyle = function (el,style) {
			var cs;
			if (typeof el.currentStyle != 'undefined'){
					cs = el.currentStyle;
			}
			else {
					cs = document.defaultView.getComputedStyle(el,null);
			}
			return  cs[style];
		}
		
		document.getElementById("sortingContainer").style.width = computedStyle(document.getElementById("tileContainer"), "width")
	}

	window.addEventListener('resize', handleResize);

	return (
		<div className='main' id='projectPage'>
			<p className="title" id='projectTitle'>Projects</p>
			<p className='subtitle'>These are some of my favorite projects. For a complete list, have a look <a href='/projects/directory'>here</a>.</p>
			<div id='featuredProjects'>
				<div id="sortingContainer">
					<div id='buttonContainer'>
						<ProjectButton name='All' filterProjects={filterProjects} />
						<ProjectButton name='Python' filterProjects={filterProjects} />
						<ProjectButton name='Javascript' filterProjects={filterProjects} />
						<ProjectButton name='React' filterProjects={filterProjects} />
						<ProjectButton name='Solidworks' filterProjects={filterProjects} />
					</div>
					<div id="searchContainer">
						{/* <input type="text" placeholder="Search" title="Type to search" /> */}
							Sort By: 
							<select>
								<option>Coolness 🕶️</option>
								<option>Date 📆</option>
							</select>
					</div>
				</div>
				<div id="outer">
					<div id='tileContainer'>
						{projectData
							? projectData.map((data, key) => {
								if (data.featured) {
									return (
										<FeaturedIcon data={data} />
									)
								}
								return (null)
							})
							: null
						}
					</div>
				</div>
			</div>
		</div>
	);
}
