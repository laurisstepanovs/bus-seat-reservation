<template>
  <div class="row">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <template v-for="(seat, index) in seats" :key="index">
      <div @click="open(seat.number, seat.status)" :class="[seat.status === 'free' && 'seat', seat.status !== 'free' && 'seat-reserved' ]" class="cube"></div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import open from "@/core/modal";

export default defineComponent({
  name:"starts-left",
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
