import { ElMessageBox } from 'element-plus';
import { ElNotification } from 'element-plus';
import Bus from "@/api/bus";
import {useRoute} from "vue-router";
import {ref} from "vue";

const busConfig = [
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4
];

const slicedSeatsArray = ref<Array<any>>([]);

const sliceArray = (seats:Array<any>) => {
  const slicedArray:Array<any | undefined> = [];
  let newArray:Array<any | undefined> = [];

  busConfig.forEach(item=>{
    if(seats){
      newArray = seats.splice(0, item);
    }
    slicedArray.push(newArray);
  });

  slicedSeatsArray.value = slicedArray;
}

const updateSeats = () => {
  Bus.getBusSeats(1).then(res => {
    sliceArray(res.data);
  }).catch(err => {
    console.log(err);
  });
}

const open = (seatNumber) => {
  const route = useRoute();
  ElMessageBox.prompt('Please input your name', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern: /[^\s]/,
    inputErrorMessage: 'Empty Field',
  })
    .then(({ value }) => {
      Bus.updateSeatStatus("1", seatNumber, value).then(res => {
        console.log(res);
        updateSeats();
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

export { sliceArray, slicedSeatsArray }
