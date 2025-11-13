//? keyof => type operator

type VehicleList = {
  bike: string;
  car: string;
  cng: string;
};
type VehicleName = keyof VehicleList;
const myVehicle: VehicleName = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 222,
  name: "Mahdi",
  address: {
    city: "Chattogram",
  },
};
type Product = {
  brand: string;
  model: string;
};
const product: Product = {
  brand: "HP",
  model: "Elitebook 840 G6",
};
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
const result1 = getPropertyFromObj(user, "name");
const result2 = getPropertyFromObj(product, "brand");

console.log("", { result1 }, "\n", { result2 });
