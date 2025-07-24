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
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTestInputDTO } from 'src/Teste/TesteDTO/CreateTestInput.dto';
import { UpdateTestInputDTO } from 'src/Teste/TesteDTO/UpdateTestInput.dto';
import { findByIdOutpurDTO } from 'src/Teste/TesteDTO/findByIdOutput.dto';
import { TestService } from 'src/Teste/test.service';
@ApiTags('Testes')
@Controller('testes')
export class Testecontroller {
  constructor(private testService: TestService) {}

  @Get()
  @ApiQuery({ name: 'id', type: Number, required: false })
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.testService.findAll(id);
  }

  @Get(':id')
  @ApiResponse({ type: findByIdOutpurDTO, status: 200 })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.testService.findById(id);
  }

  @Post()
  @ApiResponse({ status: 201 })
  create(@Body() body: CreateTestInputDTO) {
    return this.testService.create(body);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
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
