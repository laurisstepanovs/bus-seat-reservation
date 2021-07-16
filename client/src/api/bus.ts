
import Api from "./api";

export default {
  async getBusSeats(bus:number) {
    return Api().post("/seats/"+bus);
  }
};