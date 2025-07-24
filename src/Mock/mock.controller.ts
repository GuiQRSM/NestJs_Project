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
import { MockService } from 'src/Mock/mock.service';
import { CreateMockInputDTO } from 'src/Mock/MockDTO/CreateMockInput.dto';
import { findByIdOutpurDTO } from 'src/Mock/MockDTO/findByIdOutput.dto';
import { UpdateMockInputDTO } from 'src/Mock/MockDTO/UpdateMockInput.dto';

@ApiTags('Mocks')
@Controller('mocks')
export class MockController {
  constructor(private mockServices: MockService) {}

  @Get()
  @ApiQuery({ name: 'id', type: Number, required: false })
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.mockServices.findAll(id);
  }

  @Get(':id')
  @ApiResponse({ type: findByIdOutpurDTO, status: 200 })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.mockServices.findById(id);
  }

  @Post()
  @ApiResponse({ status: 201 })
  create(@Body() body: CreateMockInputDTO) {
    return this.mockServices.create(body);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
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
