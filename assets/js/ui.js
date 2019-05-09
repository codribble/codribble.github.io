(function(){
'use strict';

// var deadline = '05/08/2019 00:00:00 AM';
var deadline = document.getElementById('clock').dataset.dead;

initializeClock('clock', deadline);

})();

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60),
		hours = Math.floor((t / (1000 * 60 * 60)) % 24),
		days = Math.floor(t / (1000 * 60 * 60 * 24));

	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id),
		daysSpan = clock.querySelector('.days'),
		hoursSpan = clock.querySelector('.hours'),
		minutesSpan = clock.querySelector('.minutes'),
		secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}