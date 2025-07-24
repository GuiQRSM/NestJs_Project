import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductInputDTO } from 'src/Products/dto/CreateProductInput.dto';
import { UpdateProductInputDTO } from 'src/Products/dto/UpdateProductInput.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { findByIdOutpurDTO } from 'src/Products/dto/findByIdOutput.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiResponse({ status: 201 })
  create(@Body() body: CreateProductInputDTO) {
    return this.productsService.create(body);
  }

  @Get()
  @ApiQuery({ name: 'id', type: Number, required: false })
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.productsService.findAll(id);
  }

  @Get(':id')
  @ApiResponse({ type: findByIdOutpurDTO, status: 200 })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findById(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductInputDTO,
  ) {
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.delete(+id);
  }
}
