window.addEventListener('load', function(){

	function getJSONInfo(){

		var infoRequest = new XMLHttpRequest();
		infoRequest.open('GET', 'http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true');
		infoRequest.onload = function(e){
			var jsonInfo = JSON.parse(infoRequest.responseText);
			createHeader(jsonInfo);
		}
		infoRequest.send();
	}

	function createHeader(info){
		var bodyHTML = document.body;
		var headerName = document.createElement("h1");
		var headerText = document.createTextNode("These are not the drones you are looking for.");
		bodyHTML.appendChild(headerName);
		headerName.appendChild(headerText);
		getPersonInfo(info);
	}

	function getPersonInfo(infoArray){
		var bodyHTML = document.body;
		for (i = 0; i < infoArray.length; i++){
			var headerText = document.createTextNode("Name: " + infoArray[i].fname + " " + infoArray[i].lname);
			var pTelephone = document.createTextNode("Telephone: " + infoArray[i].tel);
			var pAddress = document.createTextNode("Address: " + infoArray[i].address);
			var pCity = document.createTextNode("City: " + infoArray[i].city);
			var pState = document.createTextNode("State: " + infoArray[i].state);
			var pZip = document.createTextNode("Zip: " + infoArray[i].zip);
			fillNode(headerText, pTelephone, pAddress, pCity, pState, pZip, bodyHTML);
		}
	}

	function fillNode(name, tel, address, city, state, zip, body){
		var br = document.createElement("br");
		var headerName = document.createElement("h2");
		var p = document.createElement("p");
		body.appendChild(headerName);
		headerName.appendChild(name);
		body.appendChild(p);
		debugger;
		p.appendChild(tel);
		p.appendChild(br);
		p.appendChild(address);
		p.appendChild(br);
		p.appendChild(city);
		p.appendChild(br);
		p.appendChild(state);
		p.appendChild(br);
		p.appendChild(zip);
		debugger;
	}

	getJSONInfo();

});