import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactCompareImage from 'react-compare-image'
import Helmet from "react-helmet"
import Project from './ProjectInterface';
import MarkdownView from 'react-showdown';


export default function ProjectPage() {

	const [projectData, setProjectData] = useState<string>()
	const [metaData, setMetaData] = useState<Project>()
	const { name } = useParams()
	var jsonLink = process.env.PUBLIC_URL + '/assets/projects/' + name + '/' + name + ".json"
	var mdLink = process.env.PUBLIC_URL + '/assets/projects/' + name + '/' + name + ".md"

	useEffect(() => {
		fetch(jsonLink)
			.then(response => response.json())
			.then(json => setMetaData(json))
			.catch(error => {
				(document.getElementById("projectBody") as HTMLElement).innerHTML = "<div class='title'>Could not load page :/</div><p class='subtitle'>Probably still in development</p>"
			})

		fetch(mdLink)
			.then(response => response.text())
			.then(text => setProjectData(text))
	}, [])

	// this is really stupid and is fully bad practice,
	// but......
	// showdown doesn't handle videos properly so its not my fault, ok...?
	// TLDR: Giving the videos controls because showdown removes them.
	useEffect(() => {
		
		const interval = setInterval(() => {
			document.querySelectorAll("video").forEach(video => {
				video.setAttribute("controls", "true")
			})
		}, 100);

		return () => clearInterval(interval);
	}, []);

	function parseMarkdown(data: string) {

		if (!data) return "";

		// this replaces the image paths to point to the proper project directory
		// https://stackoverflow.com/questions/52852425/change-image-source-in-markdown-text-using-node-js
		// it's called a 'capture group' in regex
		// however, it doesn't match anything with https:// because that means it's an external link
		// also, it doesn't match anything that starts with a slash, because that means it wants the root directory (eg "contact me" is /contact, and not the project dir)
		data = data.replaceAll(/\]\((?!https?:\/\/)(?!\/)(.+?)(?=(.+))/g, `](${process.env.PUBLIC_URL}/assets/projects/${name}/$1`)

		// replace the src on video tags
		data = data.replaceAll(/<video src=("|')(.+?)\1><\/video>/g, `<video src=\"${process.env.PUBLIC_URL}/assets/projects/${name}/$2\" controls></video>`);

		return (data)
	}

	function buildProjectPage() {

		if (!metaData) return <></>;

		return (
			<div id='projectBody' className='main'>

				<Helmet>
					<title>{metaData.title + " - Owen Moogk"}</title>
				</Helmet>

				<style dangerouslySetInnerHTML={{
					__html: `
						html, body{
							max-width: 100%;
							overflow-x: hidden;
						}
					`}}></style>

				<div className="title">
					{metaData.title}
				</div>
				<p className='subtitle'>{metaData.date}</p>

				<div id='icons'>

					{metaData.githubLink === ""
						? null
						: <a href={metaData.githubLink ? metaData.githubLink : "https://github.com/owenmoogk/" + name} target="_blank" rel="noreferrer" >
							<svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
					}

					{metaData.externalLink
						? <a href={metaData.externalLink} target='_blank' rel='noreferrer'>
							<svg viewBox="0 0 24 24" className='projectSvg'>
								<g fill="none">
									<path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</g>
							</svg>
						</a>
						: null
					}

					{metaData.types.map((type: string, key: number) => {
						return (
							<span className='type' key={key} style={{ border: "2px solid var(--" + type.toLowerCase().replace(/[^a-z]/gi, '') + ",grey)" }}>
								<span className='circle' style={{ backgroundColor: "var(--" + type.toLowerCase().replace(/[^a-z]/gi, '') + ",grey)" }}></span>
								{type}
							</span>
						)
					})}
				</div>

				<div id='blocks'>
					<MarkdownView
						markdown={parseMarkdown(projectData ?? "")}
						options={{ tables: true, emoji: true }}
						components={{
							h4(props) {
								console.log(props.children[0].split(","))
								var [image1, image2] = props.children[0].split(",")
								return (
									<div className='sliderContainer'>
										<ReactCompareImage 
											leftImage={"/assets/projects/" + name + "/" + image1} 
											rightImage={"/assets/projects/" + name + "/" + image2} 
											aspectRatio='taller' 
											handle={
												<button style={{
													height: '50px',
													outline: 'none',
													width: '10px',
													border: 'none',
													borderRadius: '5px',
												}}></button>
										} />
										<span className='subtitle'>Move the slider to see inside.</span>
									</div>
								)
							}
						}}
					/>
				</div>
			</div>
		)
	}

	return (
		metaData && projectData
			? buildProjectPage()
			// will put errors here if there are any
			: <div id='projectBody' className='main'></div>
	);
}