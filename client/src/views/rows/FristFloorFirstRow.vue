<template>
  <div class="row space-around">
    <div class="cube not-available"></div>
    <div class="cube"></div>
    <div class="cube not-available"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name:"first-floor-first-row",
  props:{
    seats: Array
  },
  components: {}
})
</script>
