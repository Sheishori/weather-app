(()=>{"use strict";console.log(async function(e){var n;return{name:(n=await async function(e="London"){const n=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&APPID=31cc72b5a0cd8e85f3b76bb2c36522ed",{mode:"cors"});return await n.json()}(e)).name,country:n.sys.country,weather:n.weather[0].description,temp:n.main.temp,pressure:n.main.pressure,humidity:n.main.humidity,wind:n.wind.speed}}())})();