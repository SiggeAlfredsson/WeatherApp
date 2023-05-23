


<template>
  <div class="weather-details">
    <img :src="getWeatherIconUrl(weatherData.weather[0].icon)" alt="weather icon">
    <h1>{{ weatherData.name }}, {{ weatherData.sys.country }}</h1>
    <h2><span>Weather:</span> {{ weatherData.weather[0].main }} </h2>
    <h2><span>Temperature:</span> {{ Math.round(weatherData.main.temp) }}&deg</h2>
    
    <h2><span>Humidity:</span> {{ weatherData.main.humidity }}%</h2>
    <h2><span>Wind:</span> {{ (weatherData.wind.speed*0.44704).toFixed(1) }} ({{ (weatherData.wind.gust*0.44704).toFixed(1) }}) m/s</h2> <!-- M/s Är det ända rätta måttet på vind... -->
    <h2><span>Wind deg:</span> {{ weatherData.wind.deg }}&deg </h2>
    <h2><span>Pressure:</span> {{ weatherData.main.pressure }}</h2>
  </div>
</template>

<script lang="ts">
import type { WeatherData } from '@/model/weatherModels';


export default {
  name: 'WeatherDetails',
  props: {
    weatherData: {
      type: Object as () => WeatherData,
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
  border: black 1px solid;

}

.weather-details {
  border: black 1px solid;

}

span{
  color: #999;
}
</style>


