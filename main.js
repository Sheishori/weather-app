(()=>{"use strict";console.log(async function(e){const n=await async function(e="London"){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=31cc72b5a0cd8e85f3b76bb2c36522ed`,{mode:"cors"});return await n.json()}(e),t=function(e){return{name:e.name,country:e.sys.country,weather:e.weather[0].description,temp:e.main.temp,pressure:e.main.pressure,humidity:e.main.humidity,wind:e.wind.speed}}(n);return t}())})();