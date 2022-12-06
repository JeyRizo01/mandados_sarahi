<script setup>
import {ref, computed} from 'vue'

let counter = ref(0);
const arrayFavoritos = ref([])
const increment = ()=>{
  console.log("aumentar contador")
  counter.value ++;
}

const decrement = ()=>{
  console.log("disminuir contador")
  counter.value --;
}

const reset = ()=>{
  console.log("disminuir contador")
  counter.value = 0;
}
 
 const classCounter = computed(()=>{
  if (counter.value === 0) {
    return 'zero'
  }
  if (counter.value> 0 ){
    return 'positive'
  }
  if(counter.value < 0){
    return 'negative'
  }
 })

 const add = ()=>{
  arrayFavoritos.value.push(counter.value)
 }

 const bloquear = computed (()=>{
    const numSearch = arrayFavoritos.value.find(num => num === counter.value)
    if(numSearch === 0){
      return true
    }
    return numSearch ? true : false
 })
</script>

<template>
  <h1 :class="classCounter">{{counter}}</h1>
  <button @:click="increment">Aumentar contador</button>
  <button @:click="decrement">Disminuir contador</button>
  <button @:click="reset">Resetear</button>
  <button @click="add" :disabled="bloquear">Add</button>
  <ul>
    <li v-for="(num, index) in arrayFavoritos" :key="index">
      {{num}}
    </li>
  </ul>
</template>

<style>
.positive{
  color: green;
}

.negative{
  color: red;
}

.zero {
  color: aqua;
}
</style>