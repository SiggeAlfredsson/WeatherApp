

<template>
  <WeatherSearch @search="searchWeather"/>
  <CurrentWeather v-if="weatherData" :weatherData="weatherData" />

</template>

<script lang="ts">
import CurrentWeather from './components/currentWeather.vue';
import type { WeatherData } from './model/weatherModels'; //hmm
import currentWeatherService from './service/currentWeatherService';
import WeatherSearch from './components/weatherSearch.vue';
import geocodingService from './service/geocodingService';



export default {
  components: { CurrentWeather, WeatherSearch },
  data() {
     return {
      weatherData: null,
      searchQuery: '' 
  };
  },
  methods: {
    searchWeather(query: string) {
      this.searchQuery = query;
      geocodingService
        .getGeo(query)
        .then(data => {
          // console.log(data);
          const {lat,lon} = data[0]; // tog längre än vad det borde att se den 0an...
          return currentWeatherService.getWeather(lat,lon);
        })
        .then(data => {
          this.weatherData = data;
        })
    }
  }



}

</script>