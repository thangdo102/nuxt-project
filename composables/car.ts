import { addNewCar } from "~/plugins/src/car";
import { getCurrentUser } from "~/plugins/src/firebase";
import type { Car } from "~/types/types";

export const useCar = () => {
  const route = useRoute();
  const router = useRouter();
  const carId = route.params.carId as string;
  const snackbar = useSnackbar();

  const car: Car = reactive({
    name: "",
    color: "",
    manufactureYear: "",
    pricePerDay: null,
    city: "",
    owner: {
      id: "",
      name: "",
      address: "",
    },
    type: null,
    receiveType: null,
    images: [],
    seat: null,
    fuel: null,
    wastedFuel: null,
    introduction: null,
    convenient: null,
  });

  const mounted = async () => {
    const user = await getCurrentUser();
    car.owner = {
      id: user.uid,
      name: user.displayName,
      address: null,
    };
  };

  const saveCar = async () => {
    if (
      !car.color ||
      !car.convenient ||
      !car.fuel ||
      !car.introduction ||
      !car.manufactureYear ||
      !car.name ||
      !car.pricePerDay ||
      !car.receiveType ||
      !car.seat ||
      !car.type ||
      !car.wastedFuel
    ) {
      return;
    }
    try {
      await addNewCar(car);
      snackbar.add({
        type: "success",
        text: "Succesfully!",
      });
      router.push("/");
    } catch (error) {
      snackbar.add({
        type: "error",
        text: "Error",
      });
    }
  };

  return {
    car,
    saveCar,
    mounted,
  };
};
