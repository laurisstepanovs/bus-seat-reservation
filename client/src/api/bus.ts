
import Api from "./api";

export default {
  getBusSeats(bus:number) {
    return Api().post("/seats/"+bus);
  },

  updateSeatStatus(bus:string | string[], seatNumber: number, reservationName:string) {
    return Api().post("/update/"+bus+"/"+seatNumber+"/"+reservationName);
  }
};
