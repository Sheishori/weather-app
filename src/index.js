import getWeatherData from './getWeatherData';

const input = document.getElementById('location');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(getWeatherData(input.value));
});