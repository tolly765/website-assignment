function setCookieContent() {
	var name = prompt("What's your name?");
	var days = prompt("How long do you want me to remember your name?");
	var lengthOfName = name.length
	document.getElementById('output').innerHTML = 'Cookie created! Length: ' + lengthOfName;

	var date = new Date(); //Set time
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
	expires = "; expires=" + date.toGMTString();
	document.cookie = 'test' + "=" + name + '' + "; path=/";
};

