import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarInputDTO } from 'src/cars/DTO/CreateCarInput.dto';
import { UpdateCarInputDTO } from 'src/cars/DTO/UpdateCarInput.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarsService {
  constructor(private prismaService: PrismaService) {}

  async create(body: CreateCarInputDTO) {
    const newCar = await this.prismaService.cars.create({
      data: {
        name: body.name,
        year: body.year,
        price: Number(body.price),
      },
    });
    return newCar;
  }

  async findAll(id: number) {
    if (id) {
      const cars = await this.prismaService.cars.findUnique({ where: { id } });
      return cars;
    }
    const carsMany = await this.prismaService.cars.findMany();
    return carsMany;
  }

  async findById(id: number) {
    const cars = await this.prismaService.cars.findUnique({ where: { id } });
    if (cars) return cars;
    throw new NotFoundException();
  }

  async update(id: number, body: UpdateCarInputDTO) {
    const cars = await this.findById(id);
    if (!cars) throw new NotFoundException();
    const alterCar = await this.prismaService.cars.update({
      where: { id },
      data: {
        name: body.name,
        year: body.year,
        price: Number(body.price),
      },
    });
    return alterCar;
  }

  async delete(id: number) {
    const cars = await this.prismaService.cars.findUnique({ where: { id } });
    if (!cars) throw new NotFoundException();
    await this.prismaService.cars.delete({ where: { id } });
    return { message: 'Car deleted' };
  }
}
