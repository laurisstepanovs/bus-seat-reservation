<template>
  <div class="row">
    <div class="cube seat">seats.</div>
    <div class="cube seat"></div>
    <div class="cube"></div>
    <div class="cube seat"></div>
    <div class="cube seat"></div>
  </div>
  <div class="row">
    <div class="table"></div>
    <div class="cube"></div>
    <div class="table"></div>
  </div>
  <div class="row">
    <div class="cube seat"></div>
    <div class="cube seat"></div>
    <div class="cube"></div>
    <div class="cube seat"></div>
    <div class="cube seat"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name:"table-row-4-and-4",
  props:{
    seats: Array
  },
  components: {}
})
</script>
