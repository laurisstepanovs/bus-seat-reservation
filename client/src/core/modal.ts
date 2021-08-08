import { ElMessageBox } from 'element-plus';
import { ElNotification } from 'element-plus';
import Bus from "@/api/bus";
import router from "@/router/index";
import {ref} from "vue";

const busConfig = [
  2,
  8,
  4,
  4,
  4,
  4,
  2,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  2,
  4,
  4,
  4,
  4,
  5
];

const busConfig1 = [
  2,
  8,
  4,
  4,
  4,
  4,
  2,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  2,
  4,
  4,
  4,
  4,
  5
];

const busConfig2 = [
  2,
  8,
  4,
  4,
  4,
  4,
  2,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  2,
  4,
  4,
  4,
  4,
  5
];

const slicedSeatsArray = ref<Array<any>>([]);
const slicedSeatsArray1 = ref<Array<any>>([]);
const slicedSeatsArray2 = ref<Array<any>>([]);

const sliceArray = (seats:Array<any>) => {
  const slicedArray:Array<any | undefined> = [];
  let newArray:Array<any | undefined> = [];

  busConfig.forEach(item=>{
    if(seats){
      newArray = seats.splice(0, item);
    }
    slicedArray.push(newArray);
  });
  console.log(slicedSeatsArray.value);
  slicedSeatsArray.value = slicedArray;
}

const sliceArray1 = (seats:Array<any>) => {
  const slicedArray:Array<any | undefined> = [];
  let newArray:Array<any | undefined> = [];

  busConfig1.forEach(item=>{
    if(seats){
      newArray = seats.splice(0, item);
    }
    slicedArray.push(newArray);
  });
  console.log(slicedSeatsArray.value);
  slicedSeatsArray1.value = slicedArray;
}

const sliceArray2 = (seats:Array<any>) => {
  const slicedArray:Array<any | undefined> = [];
  let newArray:Array<any | undefined> = [];

  busConfig2.forEach(item=>{
    if(seats){
      newArray = seats.splice(0, item);
    }
    slicedArray.push(newArray);
  });
  console.log(slicedSeatsArray.value);
  slicedSeatsArray2.value = slicedArray;
}

const updateSeats = (busNumber) => {
  Bus.getBusSeats(busNumber).then(res => {
    if (busNumber===1){
      sliceArray(res.data);
    } else {
      if (busNumber===2){
        sliceArray1(res.data);
      } else {
        if(busNumber==3){
          sliceArray2(res.data);
        }
      }
    }
  }).catch(err => {
    console.log(err);
  });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const open = (seatNumber) => {
  ElMessageBox.prompt('Please input your name', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern: /[^\s]/,
    inputErrorMessage: 'Empty Field',
  })
    .then(({ value }) => {
      Bus.updateSeatStatus(router.currentRoute.value.meta.busNumber, seatNumber, value).then(res => {
        console.log(res);
        updateSeats(router.currentRoute.value.meta.busNumber);
        ElNotification({
          title: 'Success',
          message: 'You have successfully reserved a seat!',
          type: 'success'
        });
      }).catch(err => {
        ElNotification({
          title: 'Error',
          message: err,
          type: 'error'
        });
      });
    });
};

export default open;

export { sliceArray, sliceArray1, sliceArray2, slicedSeatsArray, slicedSeatsArray1, slicedSeatsArray2 }
