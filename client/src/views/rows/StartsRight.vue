<template>
  <div class="row">
    <template v-for="(seat, index) in seats" :key="index">
      <div @click="open(seat.number, seat.status)" :class="[seat.status === 'free' && 'seat', seat.status !== 'free' && 'seat-reserved' ]" class="cube"></div>
    </template>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import open from "@/core/modal";

export default defineComponent({
  name:"start-right",
  props:{
    seats: Array
  },
  components: {},
  setup(){
    return {
      open
    }
  }
})
</script>
