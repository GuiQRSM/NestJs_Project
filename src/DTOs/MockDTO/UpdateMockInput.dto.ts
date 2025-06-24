import { PartialType } from '@nestjs/mapped-types';
import { CreateMockInputDTO } from 'src/DTOs/MockDTO/CreateMockInput.dto';

export class UpdateMockInputDTO extends PartialType(CreateMockInputDTO) {}
