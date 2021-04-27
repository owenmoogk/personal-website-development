import React from 'react';

export default function ProjectIcon(props) {

	// the function called when loading page
	function loadProjectPage(xmlPage) {
		var x;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				x = projectPage(this);
				return x
			}
		};
		xmlhttp.open("GET", xmlPage, true);
		xmlhttp.send();
		console.log(x)
		return(x)
	}

	// actual loading process
	function projectPage(xml) {

		// xml doxument
		var xmlDoc;
		xmlDoc = xml.responseXML;

		// entire html of page
		var txt = "";

		// load header of page
		var pageTitle = xmlDoc.getElementsByTagName('page-title')[0].innerHTML
		var date = xmlDoc.getElementsByTagName('date')[0].innerHTML
		txt += '<div className="title"><p style="line-height: 70px;">'+pageTitle+'</p></div><div className="date"><p className="pdate">'+date+'</p></div>';


		// load main part of the page
		var blocks = xmlDoc.getElementsByTagName("block");

		// loading the main part of the page
		for (var currBlockNum = 0; currBlockNum < blocks.length; currBlockNum++) {
			var currBlockLength = blocks[currBlockNum].children.length // the number of elements in the current block
			var currBlock = blocks[currBlockNum].children // the elements inside the current block

			txt += '<div className="block">'

			// looping thru the elements in the block
			for (var blockElementNum = 0; blockElementNum < currBlockLength; blockElementNum++){
				var elementType = currBlock[blockElementNum].tagName // contains the tag name for the element (eg... title, text, image)
				var elementData = currBlock[blockElementNum].innerHTML // contains the inner data for the element

				// appending text to var 'txt' depending on tag name
				if (elementType == 'title'){
					txt += '<div className="text"><h1>'+elementData+'</h1>'
				}
				else if (elementType == 'text'){
					
					// add in breaks for ~~
					var exitLoop = false
					while (exitLoop == false){
						elementData = elementData.replace('~~','<br>')
						var i = elementData.search('~~')
						if (i == -1){
							exitLoop = true
						}
					}
					txt += '<p>'+elementData+'</p></div>'
				}
				else if (elementType == 'image'){
					txt += '<div className="img"><img src="'+elementData+'" className="img"></div>'
				}
				else if (elementType == 'render'){
					txt += '<div className="render"><img src="'+elementData+'" className="img"></div>'
				}
				else{
					console.log('unknown tag name') // shouldnt ever happen
				}
			}
			
			txt += '</div>' // close out block div

		}
		return(txt)
	}

	return (
		<div className="body">
			{console.log(loadProjectPage('/assets/projects/2702-2019.xml'))}
		</div>
	);
}