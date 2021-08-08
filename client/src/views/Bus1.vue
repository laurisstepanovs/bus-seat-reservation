<template>
    <div>
      <h1>HD 200</h1>
      <div class="bus">
        <div class="floor-1">
          Floor 1
          <FristFloorFirstRow></FristFloorFirstRow>
          <StartsLeft :seats="slicedSeatsArray1[0]"></StartsLeft>
          <TablesRow4And4 :seats="slicedSeatsArray1[1]"></TablesRow4And4>
          <BasicRow :seats="slicedSeatsArray1[2]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[3]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[4]"></BasicRow>
          <ToiletWithoutSeats></ToiletWithoutSeats>
        </div>

        <div class="floor-2">
          Floor2
          <BasicRow :seats="slicedSeatsArray1[5]"></BasicRow>
          <StartsLeft :seats="slicedSeatsArray1[6]"></StartsLeft>
          <BasicRow :seats="slicedSeatsArray1[7]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[8]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[9]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[10]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[11]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[12]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[13]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[14]"></BasicRow>
          <StartsRight :seats="slicedSeatsArray1[15]"></StartsRight>
          <BasicRow :seats="slicedSeatsArray1[16]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[17]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[18]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray1[19]"></BasicRow>
          <LastRowWithFourSeats :seats="slicedSeatsArray1[20]"></LastRowWithFourSeats>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
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
import {sliceArray1, slicedSeatsArray1} from "@/core/modal";

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
        Bus.getBusSeats(2).then(res => {
          sliceArray1(res.data);
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
      slicedSeatsArray1
    };
  },
});
</script>
