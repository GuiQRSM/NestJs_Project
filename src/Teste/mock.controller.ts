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
import { CreateMockInputDTO } from 'src/DTOs/MockDTO/CreateMockInput.dto';
import { UpdateMockInputDTO } from 'src/DTOs/MockDTO/UpdateMockInput.dto';
import { MockService } from 'src/services/mock.service';

@Controller('/mocks')
export class MockController {
  constructor(private mocksService: MockService) {}

  @Get('/')
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.mocksService.findAll(id);
  }

  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.mocksService.findById(id);
  }

  @Post('/')
  create(@Body() body: CreateMockInputDTO) {
    return this.mocksService.create(body);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateMockInputDTO,
  ) {
    return this.mocksService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.mocksService.delete(id);
  }
}
