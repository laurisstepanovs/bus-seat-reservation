<template>
  <div class="row">
    <div class="wc">WC</div>
    <div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <div>
      <div style="display: flex">
      </div>
      <div style="display: flex">
        <template v-for="(seat, index) in seats" :key="index">
          <div @click="open(seat.number)" :class="[seat.status === 'free' && 'seat', seat.status !== 'free' && 'seat-reserved' ]" class="cube"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name:"toilet-with-seats",
  props:{
    seats: Array
  },
  components: {}
})
</script>
