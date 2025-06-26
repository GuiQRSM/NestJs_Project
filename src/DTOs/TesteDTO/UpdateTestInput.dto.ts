import { PartialType } from '@nestjs/mapped-types';
import { CreateTestInputDTO } from 'src/DTOs/TesteDTO/CreateTestInput.dto';

export class UpdateTestInputDTO extends PartialType(CreateTestInputDTO) {}
