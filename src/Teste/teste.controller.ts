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
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTestInputDTO } from 'src/Teste/TesteDTO/CreateTestInput.dto';
import { UpdateTestInputDTO } from 'src/Teste/TesteDTO/UpdateTestInput.dto';
import { TestService } from 'src/Teste/test.service';
@ApiTags('Teste')
@Controller('testes')
export class Testecontroller {
  constructor(private testService: TestService) {}

  @Get()
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.testService.findAll(id);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.testService.findById(id);
  }

  @Post()
  create(@Body() body: CreateTestInputDTO) {
    return this.testService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTestInputDTO,
  ) {
    return this.testService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.testService.delete(id);
  }
}
