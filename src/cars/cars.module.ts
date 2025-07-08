import { Module } from '@nestjs/common';
import { CarsController } from 'src/cars/cars.controller';
import { CarsService } from 'src/cars/cars.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService, PrismaService],
})
export class CarsModule {}
