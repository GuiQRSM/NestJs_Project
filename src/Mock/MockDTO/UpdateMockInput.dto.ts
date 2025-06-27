import { PartialType } from '@nestjs/mapped-types';
import { CreateTestInputDTO } from 'src/Teste/TesteDTO/CreateTestInput.dto';

export class UpdateMockInputDTO extends PartialType(CreateTestInputDTO) {}
