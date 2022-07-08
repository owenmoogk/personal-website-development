import React from 'react';
import Helmet from 'react-helmet';

export default function ContactPage() {

	return (
		<div className="main">
			<Helmet>
				<title>Contact - Owen Moogk</title>
			</Helmet>
			<p className="title">Contact</p>
			<div id='contactPage'>
				<div className='contactCard'>
					<h2>Say hi...</h2>
					<p>
						<a href='mailto:owenmoogk@gmail.com'>owenmoogk@gmail.com</a>
						<br/>
						<a href='https://www.linkedin.com/in/owenmoogk/'>linkedin.com/in/owenmoogk/</a>
					</p>

					{/* <form action="https://send.pageclip.co/4Ru6GZ2T8CCE5mMgwxPGYhtn955GxAIj" className="pageclip-form" method="post">
						<div id='name'>
							<input type='text' placeholder='First Name' name='firstname' className='nameInput' />
							<input type='text' placeholder='Last Name' name='lastname' className='nameInput' />
						</div>
							<input type='text' placeholder='Email' name='email' id='emailInput' />
						<input type='text' placeholder='Subject' name='subject' id='subjectInput' />
						<textarea type='text' placeholder='Message' name='message' id='messageInput' />
						<button type="submit" className="pageclip-form__submit">
							<span>Send</span>
						</button>
					</form> */}

				</div>

				<div className='contactCard'>
					<h2>...or find me here</h2>

					<div id='contactLinks'>
						{/* <a href='https://www.linkedin.com/in/owen-moogk-1ab9371b8/' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<g>
									<path fillRule="evenodd" clipRule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0z" />
								</g>
							</svg>
						</a> */}
						<a href='https://github.com/owenmoogk' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<g>
									<path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
								</g>
							</svg>
						</a>
						<a href='https://www.instagram.com/owen.moogk/' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<g>
									<path fillRule="evenodd" clipRule="evenodd" d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z" />
								</g>
							</svg>
						</a>
						<a href='https://twitter.com/owen_moogk' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<g>
									<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" />
								</g>
							</svg>
						</a>
						<a href='https://open.spotify.com/user/uoxjt33b2c9axd2h9d74l3wag?si=R-cfHOGkSvGN-Ru5N81miQ' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<g>
									<path d="M11.995 0C5.381 0 0 5.382 0 11.996C0 18.616 5.381 24 11.995 24C18.615 24 24 18.615 24 11.996C24 5.382 18.615 0 11.995 0zM5.908 16.404a14.548 14.548 0 0 1 4.238-.638c2.414 0 4.797.612 6.892 1.77c.125.068.238.292.29.572c.05.28.03.567-.052.716a.61.61 0 0 1-.834.24A13.107 13.107 0 0 0 6.277 18.03a.61.61 0 0 1-.771-.402c-.107-.35.114-1.13.402-1.224zm-.523-4.42a18.154 18.154 0 0 1 4.76-.635c2.894 0 5.767.7 8.31 2.026c.179.09.31.244.37.432a.747.747 0 0 1-.052.578c-.227.444-.493.743-.66.743a.769.769 0 0 1-.35-.086a16.33 16.33 0 0 0-7.617-1.854a16.34 16.34 0 0 0-4.366.585a.749.749 0 0 1-.92-.525c-.112-.422.145-1.16.525-1.264zM5.25 9.098a.88.88 0 0 1-1.073-.641c-.123-.498.188-1.076.64-1.19a22.365 22.365 0 0 1 5.328-.649c3.45 0 6.756.776 9.824 2.307a.888.888 0 0 1 .4 1.19c-.143.288-.453.598-.795.598a.924.924 0 0 1-.388-.087a20.026 20.026 0 0 0-9.041-2.126c-1.635 0-3.282.201-4.895.598z" />
								</g>
							</svg>
						</a>
						{/* <a href='https://www.facebook.com/people/Owen-Moogk/100017665273227' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<g>
									<path fillRule="evenodd" clipRule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z" />
								</g>
							</svg>
						</a> */}
						<a href='https://www.thingiverse.com/owen_moogk' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M11.955.005C5.425-.152-.091 5.485.007 11.805c-.235 6.756 5.537 12.25 12.052 12.196C18.621 23.9 23.912 18.595 24 12.03C24.031 5.483 18.505-.18 11.955.005zm-.047 1.701a10.276 10.276 0 0 1 7.36 17.529a10.275 10.275 0 0 1-17.556-7.287C1.71 6.308 6.268 1.728 11.907 1.706zm-5.55 4.781c-.322 0-.358.033-.358.361v2.248c0 .351.04.391.398.391h3.823c.274 0 .274.004.274.265v9.736a.176.176 0 0 0 .051.146c.04.038.093.059.148.053h2.555c.247-.003.283-.035.283-.28v-9.32c0-.124.004-.239 0-.39s.055-.21.218-.21h3.9c.319.004.35-.032.35-.344V6.855c0-.34-.024-.363-.37-.363h-5.626z" /></svg>
						</a>
						<a href='https://repl.it/@owenm21' target='_blank' rel='noreferrer'>
							<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12.265.002a11.911 11.911 0 0 0-2.437.204c13.876 1.704 10.27 17.94 1.717 17.819c0 0 12.453 1.625 11.673-10.215A11.911 11.911 0 0 0 12.265.002zM8.213.827c-.2.002-.402.008-.61.016A11.856 11.856 0 0 0 .146 13.608C2.93-.421 18.805 4.122 17.9 12.688c0 0 2.85-12.014-9.688-11.861zm1.454 5.035C6.002 5.886.691 7.45.816 16.344a12.013 12.013 0 0 0 2.897 4.33c.052.051.108.1.162.149a12.02 12.02 0 0 0 1.137.926c.061.044.12.092.181.135a11.93 11.93 0 0 0 1.312.779c.132.068.266.13.4.193a11.854 11.854 0 0 0 1.199.486c.1.034.195.077.297.109a11.874 11.874 0 0 0 1.49.353c.153.027.307.05.461.07a12.016 12.016 0 0 0 1.578.123l.06.003c.4 0 .792-.021 1.18-.06c-13.949-3.327-8.645-18.924-.114-17.68c0 0-1.469-.41-3.389-.398zm2.436 2.762a3.355 3.355 0 1 0 3.354 3.356a3.355 3.355 0 0 0-3.354-3.356zm-5.95 2.192S2.82 23.09 16.172 23.196a11.978 11.978 0 0 0 7.743-9.992c.033-.319.043-.644.05-.97c.001-.085.013-.168.013-.255c0-.371-.023-.737-.056-1.1c-3.527 13.887-19.132 8.448-17.77-.063z" /></svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
