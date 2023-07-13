import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Audi',
      color: 'black',
      model: 'A4',
    },
    {
      id: 2,
      brand: 'Honda',
      color: 'white',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      color: 'silver',
      model: 'Wrangler',
    },
  ];

  public findAll(): object[] {
    return this.cars;
  }

  public findOneById(id: number): object {
    const car = this.cars.find((car) => car.id === id);

    if (car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  public createCar() {
    return 'This action adds a new car';
  }
}
