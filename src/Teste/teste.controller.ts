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
import { CreateTestInputDTO } from 'src/DTOs/TesteDTO/CreateTestInput.dto';
import { UpdateTestInputDTO } from 'src/DTOs/TesteDTO/UpdateTestInput.dto';
import { TestService } from 'src/services/test.service';

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
