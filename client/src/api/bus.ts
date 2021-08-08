
import Api from "./api";

export default {
  getBusSeats(bus:number) {
    return Api().post("/seats/"+bus);
  },

  updateSeatStatus(bus, seatNumber: number, reservationName:string) {
    return Api().post("/update/"+bus+"/"+seatNumber+"/"+reservationName);
  }
};
