import { addNewCar } from "~/plugins/src/car";
import { addCitiesData } from "~/plugins/src/firestore";

export default defineEventHandler(async (event) => {
  return {
    hello: await addCitiesData(),
  };
});
