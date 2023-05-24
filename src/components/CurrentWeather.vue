


<template>
  <div class="curr-weather-details">
    <img :src="getWeatherIconUrl(currWeather.weather[0].icon)" alt="weather icon">
    <h1>{{ currWeather.name }}, {{ currWeather.sys.country }}</h1>
    <h2><span id="desc">Weather:</span> {{ currWeather.weather[0].main }} </h2>
    <h2><span id="desc">Temperature:</span> {{ Math.round(currWeather.main.temp) }}&deg</h2>
    
    <h2><span id="desc">Humidity:</span> {{ currWeather.main.humidity }}%</h2>
    <h2>
      <span id="desc">Wind:</span> {{ (currWeather.wind.speed*0.44704).toFixed(1) }} 
      <span v-if="!isNaN(currWeather.wind.gust)">({{ (currWeather.wind.gust*0.44704).toFixed(1) }})</span> m/s
    </h2> <!-- M/s Är det ända rätta måttet på vind... -->
    <h2><span id="desc">Wind deg:</span> {{ currWeather.wind.deg }}&deg </h2>
    <h2><span id="desc">Pressure:</span> {{ currWeather.main.pressure }}</h2>
  </div>
</template>

<script lang="ts">
import type { CurrWeather } from '@/model/weatherModels';


export default {
  name: "CurrWeatherDetails",
  props: {
    currWeather: {
      type: Object as () => CurrWeather,
      required: true
    }
  },
methods: {
  getWeatherIconUrl(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
}

</script>

<style>
body {
  padding: 30px;
  /* border: red 1px solid; */

}

.curr-weather-details {
  /* border: red 1px solid; */
  padding: 20px;
  margin: 10px;

  background-color: rgb(0, 173, 181);
  border-radius: 30px;
  width: 65%;
}

#desc {
  color: rgb(238, 238, 238);
}
</style>


