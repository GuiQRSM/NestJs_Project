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
import { MockService } from 'src/Mock/mock.service';
import { CreateMockInputDTO } from 'src/Mock/MockDTO/CreateMockInput.dto';
import { UpdateMockInputDTO } from 'src/Mock/MockDTO/UpdateMockInput.dto';

@Controller('mocks')
export class MockController {
  constructor(private mockServices: MockService) {}

  @Get()
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.mockServices.findAll(id);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.mockServices.findById(id);
  }

  @Post()
  create(@Body() body: CreateMockInputDTO) {
    return this.mockServices.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateMockInputDTO,
  ) {
    return this.mockServices.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.mockServices.delete(id);
  }
}
