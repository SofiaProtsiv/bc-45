// 'use strict';

const API_KEY = '522f7ec766b55c89fccbc47a4e7a72c0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export function fetchWeatherByCityName(cityName) {
  const url = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

  return fetch(url).then(res => {
    if(res.ok){
      return res.json()
    }
  })
}

export function fetchWeatherByCoords(lat, lon) {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  return fetch(url).then(res => {
    if(res.ok){
      return res.json()
    }

    throw new Error()
  })
}