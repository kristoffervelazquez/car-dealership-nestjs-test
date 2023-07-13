import { CarsService } from './cars.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars(): object[] {
    return this.carsService.findAll();
  }
  @Get('/:id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }
  @Post()
  createCar(@Body() body: any) {
    return body;
  }
  @Patch('/:id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return `This action updates a #${id} car with ${JSON.stringify(body)}`;
  }

  @Delete('/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return `This action removes a #${id} car`;
  }
}
