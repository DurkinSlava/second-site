/*var myImage = document.querySelector('img')

myImage.onclick() = function(){
	var  mySrc = myImage.getAttribute('src');
	
	if (mySrc === 'images/fon.jpg') {
		myImage.setAttribute('src', 'images/fon2.jpg')
	} else {
		myImage.setAttribute('src', 'images/fon.jpg')
	}
}	
*/

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozzila is cool, ' + myName;
}


var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

if (!localStorage.getItem('name'))
{
	setUserName();
} else 
{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozzila is cool, ' + storedName;
}


myButton.onclick = function()
{
	
	setUserName();
}
