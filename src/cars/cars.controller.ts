import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CreateCarInputDTO } from 'src/cars/DTO/CreateCarInput.dto';
import { UpdateCarInputDTO } from 'src/cars/DTO/UpdateCarInput.dto';

@Controller('/cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Post()
  create(@Body() body: CreateCarInputDTO) {
    return this.carService.create(body);
  }

  @Get()
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.carService.findAll(id);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCarInputDTO,
  ) {
    return this.carService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.carService.delete(id);
  }
}
