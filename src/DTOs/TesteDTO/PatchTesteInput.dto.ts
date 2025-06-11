import { PartialType } from '@nestjs/mapped-types';
import { CreateTesteInpuDTO } from 'src/DTOs/TesteDTO/CreateTesteInput.dto';

export class PatchTesteInputDTO extends PartialType(CreateTesteInpuDTO) {}
