import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInputDTO } from 'src/DTOs/UserDTO/CreateUserInput.dto';

export class UpdateUserInputDTO extends PartialType(CreateUserInputDTO) {}
