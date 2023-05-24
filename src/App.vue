

<template>
  <div class="app-container">

    <h1 class="title">Sun Seeker</h1>


    <WeatherSearch @search="searchWeather" />

    <div> <!-- make to component? -->
      <ul>
        <li v-for="string in searchHistory" :key="string">
          <button id="history-button" @click="searchWeather(string.slice(0, -4))">{{ string }}</button>
          <!--slice tar bot ", SE" (landkoden) -->
        </li>
      </ul>
    </div>

    <CurrentWeather v-if="currWeather" :currWeather="currWeather" />
    <ForecastWeather v-if="forecastWeather" :forecastWeather="forecastWeather" />
  </div>
</template>

<script lang="ts">
import CurrentWeather from './components/CurrentWeather.vue';
import ForecastWeather from './components/ForecastWeather.vue';
import currentWeatherService from './service/currentWeatherService';
import WeatherSearch from './components/WeatherSearch.vue';
import geocodingService from './service/geocodingService';
import forecastWeatherService from './service/forecastWeatherSerivce';

export default {
  components: { CurrentWeather, ForecastWeather, WeatherSearch },
  data() {
    return {
      currWeather: null,
      forecastWeather: null,
      searchQuery: '',
      searchHistory: [] as string[],
    };
  },
  methods: {
    searchWeather(query: string) {
      this.searchQuery = query;
      geocodingService
        .getGeo(query)
        .then(data => {
          if (data.length == 0) {
            throw new Error('Invalid geolocation data');
          }
          const { lat, lon } = data[0]; // tog längre än vad det borde att se den 0an...
          return Promise.all([
            currentWeatherService.getWeather(lat, lon),
            forecastWeatherService.getWeather(lat, lon)
          ]);
        })
        .then(([currentWeather, forecastWeather]) => {
          this.currWeather = currentWeather;
          this.forecastWeather = forecastWeather; // funkar utan model klass?! bruh
          this.updateSearchHistory(currentWeather.name + ", " + currentWeather.sys.country);
        })
        .catch(error => {
          console.error(error);
        })
    },
    updateSearchHistory(query: string) {
      //  Göra så inga dupes i array?
      this.searchHistory.unshift(query); //som push fast istället för slutet av array så pushar den i början  ||
      if (this.searchHistory.length > 3) {
        // console.log("SPLICE")
        this.searchHistory.splice(3, 1)
      }
      // console.log(this.searchHistory)
    }
  }
}

</script>

<style>


.title {
  padding: 0px;
  margin: 0px;
  font-size: 50px;
  color: rgb(0, 173, 181);
}

.app-container {
  /* border: solid black 1px; */
  /* width: 450px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(34, 40, 49);
  padding: 10px;
}

ul {
  /* border: red 1px solid; */
  list-style-type: none;
  display: flex;
  padding: 3px;
  margin: 5px;
}

li {
  padding: 4px;
}

#history-button {

  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: #000000;
  color: rgb(0, 173, 181);
  border-radius: 8px;
  padding: 11px 24px 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms, background 200ms;

}

#history-button:hover {
  transform: translateY(-2px);
}
</style>

