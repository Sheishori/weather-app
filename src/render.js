import getWeatherData from './getWeatherData';
import getGIF from './getGIF';

function render() {
	const img = document.querySelector('img');
	const city = document.getElementById('city');
	const weather = document.getElementById('weather');
	const temp = document.getElementById('temp');
	const pressure = document.getElementById('pressure');
	const humidity = document.getElementById('humidity');
	const wind = document.getElementById('wind');
	const input = document.getElementById('location');
	const button = document.querySelector('button');
	
	async function setHTML(location) {
		const weatherData = await getWeatherData(location);
		if (!weatherData.city) {
			city.textContent = weatherData.charAt(0).toUpperCase() + weatherData.slice(1);
			clearWeather();
			img.src = await getGIF('shrug');
			return;
		};
		city.textContent = `${weatherData.city}, ${weatherData.country}`;
		weather.textContent = weatherData.weather.charAt(0).toUpperCase() + weatherData.weather.slice(1);
		temp.textContent = `${Math.round(weatherData.temp - 273.15)}°C`;
		pressure.textContent = `Pressure: ${weatherData.pressure} hPa`;
		humidity.textContent = `Humidity: ${weatherData.humidity}%`;
		wind.textContent = `Wind: ${weatherData.wind} km/h`;
		img.src = await getGIF(weatherData.main);
	};

	function clearWeather() {
		weather.textContent = '';
		temp.textContent = '';
		pressure.textContent = '';
		humidity.textContent = '';
		wind.textContent = '';
	};

	button.addEventListener('click', (e) => {
		e.preventDefault();
		setHTML(input.value);
	});
	
	setHTML();
};

export default render;