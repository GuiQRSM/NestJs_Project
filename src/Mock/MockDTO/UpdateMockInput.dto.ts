import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTestInputDTO } from 'src/Teste/TesteDTO/CreateTestInput.dto';

export class UpdateMockInputDTO extends PartialType(CreateTestInputDTO) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
