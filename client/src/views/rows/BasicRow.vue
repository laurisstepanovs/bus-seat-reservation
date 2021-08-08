<template>
  <div class="row">
    <template v-for="(seat, index) in seats" :key="index">
      <div @click="open(seat.number)" :class="[seat.status === 'free' && 'seat', seat.status !== 'free' && 'seat-reserved' ]" class="cube"></div>
      <div v-if="index===1" class="cube"></div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import open from "@/core/modal";

export default defineComponent({
  name:"basic-row",
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
