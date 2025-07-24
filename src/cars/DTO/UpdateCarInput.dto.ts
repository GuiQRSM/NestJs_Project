import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateCarInputDTO } from 'src/cars/DTO/CreateCarInput.dto';

export class UpdateCarInputDTO extends PartialType(CreateCarInputDTO) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  price: string;
}
