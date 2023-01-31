'use strict';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchWeatherByCityName } from './weather-api'
import { getGeoposition } from './getGeoposition'
import { createWeatherMarkup } from './createWeatherMarkup'

const inputField = document.querySelector('.search-bar');
const locationBtn = document.querySelector('#get_location_btn');
const searchBtn = document.querySelector('#search_btn');
const content = document.querySelector('.content');

const getInputValue = () => {
    const city = inputField.value.trim()

    if (city === "") {
        Notify.failure('Can not be empty!');
        return;
    }

    fetchWeatherByCityName(city).then(res => {
        content.innerHTML = "";
        Notify.warning(`Getting weather details...`)
        content.innerHTML = createWeatherMarkup(res) 
    }).catch(err=>{
        Notify.failure(`City ${value} not found!`)
    })

    inputField.value = ""
};

searchBtn.addEventListener('click', getInputValue);

inputField.addEventListener('keyup', e => { 
    if(e.key === "Enter"){
        getInputValue()
    }
});

locationBtn.addEventListener('click', getGeoposition);