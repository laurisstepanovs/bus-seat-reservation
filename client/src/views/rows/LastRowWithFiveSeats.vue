<template>
  <div class="row">
    <template v-for="(seat, index) in seats" :key="index">
      <div @click="open(seat.number)" :class="[seat.status === 'free' && 'seat', seat.status !== 'free' && 'seat-reserved' ]" class="cube"></div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name:"last-row-with-five-seats",
  props:{
    seats: Array
  },
  components: {}
})
</script>
