import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateMockInputDTO } from 'src/Mock/MockDTO/CreateMockInput.dto';

export class UpdateTestInputDTO extends PartialType(CreateMockInputDTO) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
