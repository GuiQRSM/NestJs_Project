import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInputDTO } from 'src/User/UserDTO/CreateUserInput.dto';

export class UpdateUserInputDTO extends PartialType(CreateUserInputDTO) {}
