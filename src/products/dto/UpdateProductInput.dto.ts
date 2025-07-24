import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProductInputDTO } from 'src/Products/dto/CreateProductInput.dto';

export class UpdateProductInputDTO extends PartialType(CreateProductInputDTO) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: string;
}
