async function getWeatherData(location) {
	const APIData = await getWeatherAPIData(location);
	const weatherData = processWeatherData(APIData);
	return weatherData;
};

async function getWeatherAPIData(location = 'London') {
	const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=31cc72b5a0cd8e85f3b76bb2c36522ed', {mode: 'cors'});
	const APIData = await response.json();
	return APIData;
};

function processWeatherData(APIData) {
	const weatherData = {
		name: APIData.name,
		country: APIData.sys.country,
		weather: APIData.weather[0].description,
		temp: APIData.main.temp,
		pressure: APIData.main.pressure,
		humidity: APIData.main.humidity,
		wind: APIData.wind.speed,
	};
	return weatherData;
};

console.log(getWeatherData());