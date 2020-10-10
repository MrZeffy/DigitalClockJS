function updateTime(){
	let hourElement = document.getElementById('hr');
	let minuteElement = document.getElementById('mn');
	let secondsElement = document.getElementById('sc');


	let dateObject = new Date();

	hourElement.innerHTML = dateObject.getHours();
	minuteElement.innerHTML = dateObject.getMinutes();
	secondsElement.innerHTML = dateObject.getSeconds();	
}

document.addEventListener('DOMContentLoaded', setInterval(updateTime, 1000));

