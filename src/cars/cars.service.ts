import { CreateCarDto, UpdateCarDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Audi',
      color: 'black',
      model: 'A4',
    },
    {
      id: uuid(),
      brand: 'Honda',
      color: 'white',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      color: 'silver',
      model: 'Wrangler',
    },
  ];

  public findAll(): Car[] {
    return this.cars;
  }

  public findOneById(id: string): Car {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  public create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }
  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id == id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  public delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return { message: `Car with id ${id} deleted` };
  }
}
