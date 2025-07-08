import { PartialType } from '@nestjs/mapped-types';
import { CreateCarInputDTO } from 'src/cars/DTO/CreateCarInput.dto';

export class UpdateCarInputDTO extends PartialType(CreateCarInputDTO) {}
