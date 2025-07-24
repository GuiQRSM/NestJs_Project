import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateClientInputDTO } from 'src/clientes/DTO/CreateClientInput.dto';

export class UpdateClientInoutDTO extends PartialType(CreateClientInputDTO) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
