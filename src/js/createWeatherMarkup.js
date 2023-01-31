'use strict';
import { format } from 'date-fns'; // https://date-fns.org/docs/Getting-Started

const content = document.querySelector('.content');

export const createWeatherMarkup = (data) => {
    const { name } = data;
    const { country, sunrise, sunset } = data.sys;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;

    const sunriseTime = format(new Date(sunrise * 1000), 'HH:mm');
    const sunsetTime = format(new Date(sunset * 1000), 'HH:mm');

    const markup = ` <div class="weather">
    <h2 class="city">Weather in ${name}, ${country}</h2>
    <h1 class="temp">${Math.floor(temp)}°C</h1>
    <div class="flex">
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="" class="icon" />
      <div class="description">${description}</div>
    </div>
    <div class="feels_like">Feels like: ${Math.floor(feels_like)}°C</div>
    <div class="humidity">Humidity: ${humidity}%</div>
    <div class="wind">Wind speed: ${speed} km/h</div>
    <div class="sunrise">Sunrise: ${sunriseTime}</div>
    <div class="sunset">Sunset: ${sunsetTime}</div>
  </div>`;

return markup;
};

// HBS
{
    /* <div class="weather__card">
      <h2 class="city-name">{{this.name}}</h2>
      <ul class="weather-info list">
          <li class="weather-info-item">
              <p class="temp">Температура: {{this.main.temp}}<sup>&#176;</sup></p>
          </li>
          <li class="weather-info-item">
              <p class="feels-like-temp">Чувствуется как: {{this.main.feels_like}}<sup>&#176;</sup></p>
          </li>
          <li class="weather-info-item">
              <p class="sunrise-time">Восход солнца: {{this.sys.sunrise}}</p>
          </li>
          <li class="weather-info-item">
              <p class="sunset-time">Заход солнца: {{this.sys.sunset}}</p>
          </li>
          <li class="weather-info-item">
              <p class="clouds">Облаков: {{this.clouds.all}}%</p>
          </li>
      </ul>
  </div> */
}