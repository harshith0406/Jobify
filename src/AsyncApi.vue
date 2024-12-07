<script setup>
import { ref,onMounted } from 'vue';
const msg = ref("check");
const tasks = ref(["t1"]);
const addTask = () => {
  if(newTask.value.trim() !== ''){
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}
onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  tasks.value=data.map(t=>t.title);
}

);
</script>
<template>
<form @submit.prevent="addTask">
<label for="newTask">Add Task</label>
<input type="text" name="newTask" id="newTask" v-model="newTask"/>
<button type="submit">Submit</button>
</form>
<h1>Tasks</h1>
<p v-for="task in tasks">{{ tasks }}</p>
</template>