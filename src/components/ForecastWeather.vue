

<template>
  <div class="forecast-weather-details" v-for="(n, i) in 3">
    <img :src="getWeatherIconUrl(forecastWeather.list[i].weather[0].icon)" alt="weather icon">
    <h1 id="temp-container">{{ Math.round(forecastWeather.list[i].main.temp) }}&deg</h1>
    <div id="date-container">
      <h2>{{ (forecastWeather.list[i].dt_txt.slice(+11)).slice(0, -3) }}</h2>
      <h2>{{ (forecastWeather.list[i].dt_txt.slice()).slice(0, -9) }}</h2>
    </div>
  </div>
</template>



<script lang="ts">

export default {
  name: "ForecastWeatherDetails",
  props: {
    forecastWeather: {
      type: Object,
      required: true

    }
  },
  methods: {
    getWeatherIconUrl(icon: string): string {
      return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    },
  }
}

</script>

<style>
.forecast-weather-details {
  display: flex;
  /* border: red 1px solid; */
  /* padding: 20px; */
  margin: 10px;
  background-color: rgb(0, 173, 181);
  border-radius: 25px;
  width: 75%;
}

.temp-container {
  padding: 10px;
}


#date-container {

  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: red 1px solid; */
  padding: 0px;

}

#date-container h2 {

  padding: 0px;
  margin: 0px;
  display: flex;

}

</style>