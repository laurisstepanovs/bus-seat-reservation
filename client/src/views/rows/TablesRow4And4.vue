<template>
  <div class="row">
    <template v-for="(seat, index) in twoArrays[0]" :key="index">
      <div @click="open(seat.number, seat.status)" :class="[seat.status === 'free' && 'seat', seat.status !== 'free' && 'seat-reserved' ]" class="cube"></div>
      <div v-if="index===1" class="cube"></div>
    </template>
  </div>
  <div class="row">
    <div class="table"></div>
    <div class="cube"></div>
    <div class="table"></div>
  </div>
  <div class="row">
    <template v-for="(seat, index) in twoArrays[1]" :key="index">
      <div @click="open(seat.number, seat.status)" :class="[seat.status === 'free' && 'seat', seat.status !== 'free' && 'seat-reserved' ]" class="cube"></div>
      <div v-if="index===1" class="cube"></div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent, watch, ref} from "vue";
import open from "@/core/modal";

export default defineComponent({
  name:"table-row-4-and-4",
  props:{
    seats: Array
  },
  components: {},
  setup(props){
    const twoArrays = ref<Array<any> | undefined>([]);
    let newArray:Array<any> | undefined = [];
    let newArray2:Array<any> | undefined = [];

    watch(props, ()=>{
      newArray = props.seats?.slice(0,4);
      newArray2 = props.seats?.slice(4,4);
      twoArrays.value?.push(newArray);
      twoArrays.value?.push(newArray2);
    })

    return {
      twoArrays,
      open
    }
  }
})
</script>
