<template>
  <div class="row">
    <div class="wc">WC</div>
    <div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <div class="space-for-wc"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name:"toilet-without-seats",
  props:{
    seats: Array
  },
  components: {}
})
</script>
