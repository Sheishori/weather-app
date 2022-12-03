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
	const searchButton = document.getElementById('search');
	const convertButton = document.getElementById('convert');
	let weatherData = '';
	let weatherUnit = 'C';
	
	async function setHTML(location) {
		weatherData = await getWeatherData(location);
		if (!weatherData.city) {
			city.textContent = weatherData.charAt(0).toUpperCase() + weatherData.slice(1);
			clearWeather();
			img.src = await getGIF('shrug');
			return;
		};
		convertButton.style.display = 'inherit';
		city.textContent = `${weatherData.city}, ${weatherData.country}`;
		weather.textContent = weatherData.weather.charAt(0).toUpperCase() + weatherData.weather.slice(1);
		if (weatherUnit === "C") {
			temp.textContent = `${weatherData.tempC}°C`;
		} else {
			temp.textContent = `${weatherData.tempF}°F`;
		}
		pressure.textContent = `Pressure: ${weatherData.pressure} hPa`;
		humidity.textContent = `Humidity: ${weatherData.humidity}%`;
		wind.textContent = `Wind: ${weatherData.wind} km/h`;
		img.src = await getGIF(weatherData.main);
	};

	function clearWeather() {
		convertButton.style.display = 'none';
		weather.textContent = '';
		temp.textContent = '';
		pressure.textContent = '';
		humidity.textContent = '';
		wind.textContent = '';
	};

	function convertTemperature() {
		weatherUnit = (weatherUnit === "C") ? "F" : "C";
		if (weatherUnit === "C") {
			temp.textContent = `${weatherData.tempC}°C`;
		} else {
			temp.textContent = `${weatherData.tempF}°F`;
		}
	};

	convertButton.addEventListener('click', (convertTemperature));

	searchButton.addEventListener('click', (e) => {
		e.preventDefault();
		setHTML(input.value);
	});

	setHTML();
};

export default render;