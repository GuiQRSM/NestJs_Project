import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from 'src/clientes/cliente.service';
import { CreateClientInputDTO } from 'src/clientes/DTO/CreateClientInput.dto';
import { UpdateClientInoutDTO } from 'src/clientes/DTO/UpdateClientInput.dto';

@Controller('/clientes')
export class clienteController {
  constructor(private clientService: ClientService) {}

  @Get()
  findAll(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.clientService.findAll(id);
  }

  @Get(':id')
  finById(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.finById(id);
  }

  @Post()
  create(@Body() body: CreateClientInputDTO) {
    return this.clientService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateClientInoutDTO,
  ) {
    return this.clientService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.delete(id);
  }
}
