import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserInputDTO } from 'src/User/UserDTO/CreateUserInput.dto';

export class UpdateUserInputDTO extends PartialType(CreateUserInputDTO) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
