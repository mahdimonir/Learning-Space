//? conditional type => Where type depend on condition

type A = null;
type B = undefined;
type C = A extends null ? true : B extends undefined ? true : false;

type RichPeopleVehicles = {
  bike: string;
  car: string;
  ship: string;
};
type CheckVehicle<T> = T extends keyof RichPeopleVehicles ? true : false;
type HasBike = CheckVehicle<"bike">;
