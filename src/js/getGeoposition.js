import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchWeatherByCoords } from './weather-api'
import { createWeatherMarkup } from './createWeatherMarkup'

const content = document.querySelector('.content');

export function getGeoposition() {    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                content.innerHTML = "";

                fetchWeatherByCoords(latitude, longitude)
                .then(res => {
                    content.innerHTML = createWeatherMarkup(res)
                })
                .catch(error => console.log("fetchWeatherByCoords error"))
            }
        );
    }
}