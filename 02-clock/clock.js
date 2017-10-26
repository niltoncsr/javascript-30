document.addEventListener('DOMContentLoaded', loadEvent => {
	const hoursHand = document.querySelector('.hand.hour');
	const minutesHand = document.querySelector('.hand.minute');
	const secondsHand = document.querySelector('.hand.second');
	
	const animateClock = () => {
		let currentTime = new Date();
		const degreeOffset = 90;

		let hourDegree = (currentTime.getHours() * (360 / 12) - degreeOffset);
		let minutesDegree = (currentTime.getMinutes() * (360 / 60) - degreeOffset);
		let secondsDegree = (currentTime.getSeconds() * (360 / 60) - degreeOffset);

		hoursHand.style.transform = `rotate(${hourDegree}deg)`;
		minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
		secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
	}

	animateClock();
	setInterval(animateClock, 1000)
});
