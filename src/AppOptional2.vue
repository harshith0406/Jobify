
<script setup>
import { ref } from 'vue';
const msg = ref('Hello from vue');
const name = ref('Harshith');
const staus = ref(false);
const dummy = ref([1, 2, 3, 4, 5, 6, 7]);
const change = () => {
  if(staus.value === true){
    staus.value = false;
  }
  else{
    staus.value = true;
  }
}
</script>

<template>
  <h1>{{msg}}</h1>
    <h2>Hello from vue</h2>
    <p v-if="staus"> logged in</p>
    <p v-else>Not logged in</p>
    {{name}}
    <br>
    <hr>
    <ul>
      <li v-for="item in dummy">{{item}}</li>
    </ul>
    <button v-on:click="change">
      Change the status
    </button>
</template>

<style scoped>
h1{
  color: skyblue;
}
</style>