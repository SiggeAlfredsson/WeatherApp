<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="city"
      placeholder="Enter city name"
      @keydown.enter="searchWeather"
    />
    <button @click="searchWeather">Search</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WeatherSearch',
  data() {
    return {
      city: '',
    };
  },
  methods: {
    searchWeather() {
      console.log(this.city)
      // Emit an event with the entered city name to trigger the weather search
      this.$emit('search', this.city);
      this.city = ''; // Clear the input field after searching
    },
  },
};
</script>


