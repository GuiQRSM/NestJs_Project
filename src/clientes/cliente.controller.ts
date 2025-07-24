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
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientService } from 'src/clientes/cliente.service';
import { CreateClientInputDTO } from 'src/clientes/DTO/CreateClientInput.dto';
import { findByIdOutpurDTO } from 'src/clientes/DTO/findByIdOutput.dto';
import { UpdateClientInoutDTO } from 'src/clientes/DTO/UpdateClientInput.dto';
@ApiTags('Clients')
@Controller('/clientes')
export class clienteController {
  constructor(private clientService: ClientService) {}

  @Get()
  @ApiQuery({ name: 'id', type: Number, required: false })
  findAll(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.clientService.findAll(id);
  }

  @Get(':id')
  @ApiResponse({ type: findByIdOutpurDTO, status: 200 })
  finById(@Param('id', ParseIntPipe) id: number) {
    return this.clientService.finById(id);
  }

  @Post()
  @ApiResponse({ status: 201 })
  create(@Body() body: CreateClientInputDTO) {
    return this.clientService.create(body);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
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
