import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductInputDTO } from 'src/products/dto/CreateProductInput.dto';
import { UpdateProductInputDTO } from 'src/products/dto/UpdateProductInput.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() body: CreateProductInputDTO) {
    return this.productsService.create(body);
  }

  @Get()
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.productsService.findAll(id);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findById(id);
  }

  @Patch(':id')
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
