<template>
    <div>
      <div class="bus">
        <div class="floor-1">
          Floor 1
          <FristFloorFirstRow></FristFloorFirstRow>
          <StartsLeft></StartsLeft>
          <TablesRow4And4></TablesRow4And4>
          <BasicRow :seats="slicedSeatsArray[0]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[1]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[2]"></BasicRow>
          <ToiletWithoutSeats></ToiletWithoutSeats>
        </div>

        <div class="floor-2">
          Floor2
          <BasicRow :seats="slicedSeatsArray[3]"></BasicRow>
          <StartsLeft></StartsLeft>
          <BasicRow :seats="slicedSeatsArray[4]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[5]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[6]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[7]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[8]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[9]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[10]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[11]"></BasicRow>
          <StartsRight></StartsRight>
          <BasicRow :seats="slicedSeatsArray[12]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[13]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[14]"></BasicRow>
          <BasicRow :seats="slicedSeatsArray[15]"></BasicRow>
          <LastRowWithFourSeats></LastRowWithFourSeats>
<!--          <LastRowWithFiveSeats></LastRowWithFiveSeats>-->
<!--          <ToiletWithSeats></ToiletWithSeats>-->
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
  background-color:rgba(157, 150, 144, 0.646);
  display: inline-block;
  margin-right: 40px;
}

.floor-2{
  width: auto;
  height: auto;
  background-color:rgba(157, 150, 144, 0.646);
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
