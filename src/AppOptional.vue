
<script>
export default {
  data() {
    return {
      msg: 'Hello from vue',
      name: 'Harshith',
      staus: false,
      dummy:[1,2,3,4,5,6,7]
    }
  },
  methods: {
    change(){
      if (this.staus === true) {
        this.staus = false;
      }
      else {
        this.staus = true;
      }
    }
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