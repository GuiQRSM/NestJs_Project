import { PartialType } from '@nestjs/mapped-types';
import { CreateClientInputDTO } from 'src/clientes/DTO/CreateClientInput.dto';

export class UpdateClientInoutDTO extends PartialType(CreateClientInputDTO) {}
