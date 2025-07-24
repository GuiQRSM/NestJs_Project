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
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarsService } from 'src/cars/cars.service';
import { CreateCarInputDTO } from 'src/cars/DTO/CreateCarInput.dto';
import { findByIdOutpurDTO } from 'src/cars/DTO/findByIdOutput.dto';
import { UpdateCarInputDTO } from 'src/cars/DTO/UpdateCarInput.dto';
@ApiTags('Cars')
@Controller('/cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Post()
  @ApiResponse({ status: 201 })
  create(@Body() body: CreateCarInputDTO) {
    return this.carService.create(body);
  }

  @Get()
  @ApiQuery({ name: 'id', type: Number, required: false })
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.carService.findAll(id);
  }

  @Get(':id')
  @ApiResponse({ type: findByIdOutpurDTO, status: 200 })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.findById(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
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
