(()=>{"use strict";const t=document.querySelector("img"),e=document.getElementById("city"),n=document.getElementById("country"),o=document.getElementById("weather"),c=document.getElementById("temp"),a=document.getElementById("pressure"),i=document.getElementById("humidity"),m=document.getElementById("wind"),r=document.getElementById("location");async function s(r){const s=await async function(t){try{const e=await async function(t="London"){const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=31cc72b5a0cd8e85f3b76bb2c36522ed`,{mode:"cors"});return await e.json()}(t);if(200===e.cod){const t=function(t){return{city:t.name,country:t.sys.country,main:t.weather[0].main,weather:t.weather[0].description,temp:t.main.temp,pressure:t.main.pressure,humidity:t.main.humidity,wind:t.wind.speed}}(e);return t}return e.message}catch(t){console.log(t)}}(r);e.textContent=s.city,n.textContent=s.country,o.textContent=s.weather,c.textContent=s.temp,a.textContent=s.pressure,i.textContent=s.humidity,m.textContent=s.wind,t.src=await async function(t){try{const e=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ekXLfmy8SXYal69CoD65HEjmmOZDu7Fh&s=${t}`,{mode:"cors"}),n=await e.json();if(200===n.meta.status)return n.data.images.original.url;console.log(n.meta.msg)}catch(t){console.log(t)}}(s.main)}document.querySelector("button").addEventListener("click",(t=>{t.preventDefault(),s(r.value)})),s()})();