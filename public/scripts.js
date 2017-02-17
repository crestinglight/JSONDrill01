window.addEventListener('load', function(){

	function getJSONInfo(){

		var infoRequest = new XMLHttpRequest();
		infoRequest.open('GET', 'http://www.filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true');
		infoRequest.onload = function(e){
			console.log(e.target.responseText);
		}
		infoRequest.send();
	}

	getJSONInfo();

});