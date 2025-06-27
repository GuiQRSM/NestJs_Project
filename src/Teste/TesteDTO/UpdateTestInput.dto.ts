import { PartialType } from '@nestjs/mapped-types';
import { CreateMockInputDTO } from 'src/Mock/MockDTO/CreateMockInput.dto';

export class UpdateTestInputDTO extends PartialType(CreateMockInputDTO) {}
