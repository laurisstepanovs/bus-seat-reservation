<template>
    <div>
      <h1>MB 5555</h1>
      <div class="bus">
        <div class="floor-1">
          Floor 1
          <FristFloorFirstRow></FristFloorFirstRow>
          <StartsLeft :seats="slicedSeatsArray2[0]"></StartsLeft>
          <TablesRow4And4 :seats="slicedSeatsArray2[1]"></TablesRow4And4>
          <BasicRow :seats="slicedSeatsArray2[2]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[3]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[4]"></BasicRow>
          <ToiletWithoutSeats></ToiletWithoutSeats>
        </div>

        <div class="floor-2">
          Floor2
          <BasicRow :seats="slicedSeatsArray2[5]"></BasicRow>
          <StartsLeft :seats="slicedSeatsArray2[6]"></StartsLeft>
          <BasicRow :seats="slicedSeatsArray2[7]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[8]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[9]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[10]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[11]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[12]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[13]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[14]"></BasicRow>
          <StartsRight :seats="slicedSeatsArray2[15]"></StartsRight>
          <BasicRow :seats="slicedSeatsArray2[16]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[17]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[18]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray2[19]"></BasicRow>
          <LastRowWithFourSeats :seats="slicedSeatsArray2[20]"></LastRowWithFourSeats>
        </div>
      </div>

<!--        <div class="bus">-->
<!--            <div class="top">-->
<!--              <template v-for="(seat, index) in seats" :key="index">-->
<!--                <div v-if="index < limitOfOneLine" class="row">-->
<!--                  <div v-if="seat[0].number!=='null'" :class="[seat[0].status === 'free' && 'seat', seat[0].status !== 'free' && 'reserved' ]" @click="centerDialogVisible = true">{{seat[0].number}}</div>-->
<!--                  <div v-else class="exit"></div>-->
<!--                  <div v-if="seat[1].number!=='null'" :class="[seat[1].status === 'free' && 'seat', seat[1].status !== 'free' && 'reserved' ]" @click="centerDialogVisible = true">{{seat[1].number}}</div>-->
<!--                  <div v-else class="exit"></div>-->
<!--                </div>-->
<!--              </template>-->
<!--            </div>-->
<!--            <div class="bottom">-->
<!--              <template v-for="(seat, index) in seats" :key="index">-->
<!--                <div v-if="index >= limitOfOneLine" class="row">-->
<!--                  <div v-if="seat[0].number!=='null'" :class="[seat[0].status === 'free' && 'seat', seat[0].status !== 'free' && 'reserved' ]" @click="centerDialogVisible = true">{{seat[0].number}}</div>-->
<!--                  <div v-else class="exit"></div>-->
<!--                  <div v-if="seat[1].number!=='null'" :class="[seat[1].status === 'free' && 'seat', seat[1].status !== 'free' && 'reserved' ]" @click="centerDialogVisible = true">{{seat[1].number}}</div>-->
<!--                  <div v-else class="exit"></div>-->
<!--                </div>-->
<!--              </template>-->
<!--            </div>-->
<!--        </div>-->
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
import {sliceArray2, slicedSeatsArray2} from "@/core/modal";

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
        Bus.getBusSeats(3).then(res => {
          sliceArray2(res.data);
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
      slicedSeatsArray2
    };
  },
});
</script>
