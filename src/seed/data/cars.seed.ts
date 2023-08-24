import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Prius',
    color: 'White',
  },
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Rio',
    color: 'Black',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fiesta',
    color: 'Red',
  },
];
