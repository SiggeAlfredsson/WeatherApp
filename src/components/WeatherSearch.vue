<template>
  <div class="wrap">
    <div class="search-bar">
      <input class="search-input" type="text" v-model="city" placeholder="Enter city name" @input="handleInput"
        @keydown.enter="searchWeather" />
      <button class="search-button" @click="searchWeather">
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WeatherSearch',
  data() {
    return {
      city: '',
      timeout: null as number | null // Förstå detta !!
    };
  },
  methods: {
    handleInput() {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.searchWeather();
      }, 2000) as number;
    },
    searchWeather() {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      // console.log(this.city)
      if (this.city) {
        this.$emit('search', this.city);
        this.city = '';
      }

    },
  },
};

</script>


<style>

/* Search button link */
/* https://codepen.io/huange/pen/bGqMqM */

.search-bar {
  width: 100%;
  display: flex;
  padding-top: 10px;

}

.search-input {
  width: 100%;
  border: 5px solid rgb(0, 173, 181);
  border-right: none;
  height: 35px;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: rgb(0, 173, 181);
  font-size: 25px;
}

.search-button {
  width: 70px;
  height: 64,5px;
  border: 1px solid rgb(0, 173, 181);
  background: rgb(0, 173, 181);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.wrap{
  width: 70%;
}

</style>


