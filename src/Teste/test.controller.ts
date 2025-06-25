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
import { CreateTesteInpuDTO } from 'src/DTOs/TesteDTO/CreateTesteInput.dto';
import { UpdateTesteInputDTO } from 'src/DTOs/TesteDTO/UpdateTesteInput.dto';
import { TestService } from 'src/services/test.service';

@Controller('/testes')
export class TesteController {
  private testersService = new TestService();

  @Get('/')
  findAll(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.testersService.findAll(id);
  }

  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.testersService.findById(id);
  }

  @Post('/')
  create(@Body() body: CreateTesteInpuDTO) {
    return this.testersService.create(body);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTesteInputDTO,
  ) {
    return this.testersService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.testersService.delete(id);
  }
}
