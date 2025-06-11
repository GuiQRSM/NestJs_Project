import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTesteInpuDTO } from 'src/DTOs/TesteDTO/CreateTesteInput.dto';
import { PatchTesteInputDTO } from 'src/DTOs/TesteDTO/PatchTesteInput.dto';
import { UpdateTesteInputDTO } from 'src/DTOs/TesteDTO/UpdateTesteInput.dto';

@Controller('/testes')
export class TesteController {
  @Get('/')
  findAll(@Param('id', new ParseIntPipe()) id: number) {
    if (id) {
      return `method findAll() with id:${id}`;
    }
    return 'method findAll()';
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return id;
  }

  @Post('/')
  create(@Body() body: CreateTesteInpuDTO) {
    return body;
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body: UpdateTesteInputDTO) {
    return body;
  }

  @Patch('/:id')
  updatePartial(@Param('id') id: number, @Body() body: PatchTesteInputDTO) {
    return body;
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return `delete the user with id: ${id}`;
  }
}
