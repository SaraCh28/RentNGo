import { carsData } from "./data/cars-data";

export const transformedCars = carsData.map(car => {
  const [brand, ...modelParts] = car.name.split(' ');
  const model = modelParts.join(' ');

  return {
    name: car.name,
    brand,
    model,
    pricePerDay: Number(car.price.replace(/[^0-9]/g, '')),
    img: car.img,
    sideImg: car.sideImg,
    power: car.specs.power,
    torque: car.specs.torque,
    zeroTo100: car.specs.zeroTo100,
    topSpeed: car.specs.topSpeed,
    weight: car.specs.weight,
    year: car.specs.year,
    superior: 'Yes',
  };
});
