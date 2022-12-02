async function getWeather(location = 'London') {
	const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=31cc72b5a0cd8e85f3b76bb2c36522ed', {mode: 'cors'});
	const weatherData = await response.json();
	console.log(weatherData);
};

getWeather();