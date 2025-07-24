import { PartialType } from '@nestjs/mapped-types';
import { CreateProductInputDTO } from 'src/Products/dto/CreateProductInput.dto';

export class UpdateProductInputDTO extends PartialType(CreateProductInputDTO) {}
