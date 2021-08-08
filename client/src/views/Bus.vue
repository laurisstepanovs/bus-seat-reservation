<template>
    <div>
      <h1>JD 100</h1>
      <div class="bus">
        <div class="floor-1">
          Floor 1
          <FristFloorFirstRow></FristFloorFirstRow>
          <StartsLeft :seats="slicedSeatsArray[0]"></StartsLeft>
          <TablesRow4And4 :seats="slicedSeatsArray[1]"></TablesRow4And4>
          <BasicRow :seats="slicedSeatsArray[2]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[3]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[4]"></BasicRow>
          <ToiletWithoutSeats></ToiletWithoutSeats>
        </div>

        <div class="floor-2">
          Floor2
          <BasicRow :seats="slicedSeatsArray[5]"></BasicRow>
          <StartsLeft :seats="slicedSeatsArray[6]"></StartsLeft>
          <BasicRow :seats="slicedSeatsArray[7]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[8]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[9]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[10]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[11]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[12]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[13]"></BasicRow>
          <StartsRight :seats="slicedSeatsArray[14]"></StartsRight>
          <BasicRow :seats="slicedSeatsArray[15]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[16]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[17]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[18]"></BasicRow>
          <LastRowWithFourSeats :seats="slicedSeatsArray[19]"></LastRowWithFourSeats>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {useRoute} from "vue-router";
import Bus from '../api/bus';
import BasicRow from "@/views/rows/BasicRow.vue";
import LastRowWithFiveSeats from "@/views/rows/LastRowWithFiveSeats.vue";
import LastRowWithFourSeats from "@/views/rows/LastRowWithFourSeats.vue";
import StartsLeft from "@/views/rows/StartsLeft.vue";
import StartsRight from "@/views/rows/StartsRight.vue";
import FristFloorFirstRow from "@/views/rows/FristFloorFirstRow.vue";
import TablesRow4And4 from "@/views/rows/TablesRow4And4.vue";
import ToiletWithoutSeats from "@/views/rows/ToiletWithoutSeats.vue";
import ToiletWithSeats from "@/views/rows/ToiletWithSeats.vue";
import bus from "../api/bus";
import {sliceArray, slicedSeatsArray} from "@/core/modal";

export default defineComponent({
  name: 'bus',
  components: {
    BasicRow,
    // LastRowWithFiveSeats,
    LastRowWithFourSeats,
    StartsLeft,
    StartsRight,
    FristFloorFirstRow,
    TablesRow4And4,
    ToiletWithoutSeats,
    // ToiletWithSeats
  },
  setup() {
    const centerDialogVisible = ref<boolean>(false);
    const name = ref<string>('');
    const limitOfOneLine = ref<number>(15);
    const seats = ref<null | Array<any> | undefined>(null);

    onMounted(() => {
        Bus.getBusSeats(1).then(res => {
          sliceArray(res.data);
        }).catch(err => {
            console.log(err);
        });
    })

    const renderCount = ref(0);

    return {
      centerDialogVisible,
      name,
      limitOfOneLine,
      seats,
      renderCount,
      slicedSeatsArray
    };
  },
});
</script>

<style>
.floor-1{
  width: auto;
  height: auto;
  background-color:#f7f7f7;
  display: inline-block;
  margin-right: 40px;
}

.floor-2{
  width: auto;
  height: auto;
  background-color:#f7f7f7;
  display: inline-block;
}


.bus {
  display: flex;
}

.row {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.cube {
  width: 50px;
  height: 35px;
  margin: 5px;
}

.seat {
  background-color: greenyellow;
}

.seat:hover {
  background-color: green;
}

.seat-reserved {
  background-color: red;
}

.table {
  width: 112px;
  height: 35px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  background-color: #cbd5e0;
}

.wc {
  width: 112px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  background-color: #cbd5e0;
}

.wc-space {
  width: 112px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}

.not-available {
  background-color: #cbd5e0;
}
</style>
