import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
import { transformedCars } from './car.seed';

@Injectable()
export class CarService implements OnModuleInit {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async onModuleInit() {
    await this.seedCars();
  }

  async seedCars() {
    const count = await this.carRepository.count();
    if (count > 0) return;

    await this.carRepository.save(transformedCars);
    console.log('✅ Cars seeded into database');
  }

  async create(createCarDto: CreateCarDto) {
    const car = this.carRepository.create(createCarDto);
    return await this.carRepository.save(car);
  }

  async findAll() {
    return await this.carRepository.find();
  }

  async findOne(id: number) {
    return await this.carRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    await this.carRepository.update(id, updateCarDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.carRepository.delete(id);
    return { deleted: true };
  }
}
