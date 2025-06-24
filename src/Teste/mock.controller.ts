import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { emit } from 'process';
import { CreateMockInputDTO } from 'src/DTOs/MockDTO/CreateMockInput.dto';
import { UpdateMockInputDTO } from 'src/DTOs/MockDTO/UpdateMockInput.dto';

@Controller('/mocks')
export class MockController {
  private mocks = [
    {
      id: 1,
      name: 'mock1',
      email: 'mock1@tt.com',
      password: '9875',
    },
    {
      id: 2,
      name: 'mock2',
      email: 'mock2@tt.com',
      password: '9875',
    },
    {
      id: 3,
      name: 'mock3',
      email: 'mock3@tt.com',
      password: '9875',
    },
    {
      id: 4,
      name: 'mock4',
      email: 'mock4@tt.com',
      password: '9875',
    },
  ];

  @Get('/')
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    if (id) {
      const mocks = this.mocks.find((mock) => mock.id === id);
      const mockNull = [mocks].filter((mock) => mock !== null);
      return mockNull;
    }
    return this.mocks;
  }

  @Get('/:id')
  findById(@Param('id', new DefaultValuePipe(0), ParseIntPipe) id: number) {
    const mocks = this.mocks.find((mock) => mock.id === id);
    if (mocks) return mocks;
    throw new NotFoundException();
  }

  @Post('/')
  create(@Body() body: CreateMockInputDTO) {
    const mocksC = this.mocks.find((mock) => mock.email === body.email);
    if (mocksC) {
      throw new BadRequestException('Email já cadastrado!');
    }
    const lastMock = this.mocks[this.mocks.length - 1];
    const newMock = {
      id: lastMock.id + 1,
      ...body,
    };
    this.mocks.push(newMock);
    return newMock;
  }

  @Put('/:id')
  update(
    @Body() body: UpdateMockInputDTO,
    @Param('id', ParseArrayPipe) id: number,
  ) {
    const mocksC = this.mocks.find((mock) => mock.id === id);
    if (!mocksC) throw new NotFoundException();
    this.mocks.map((mock) => {
      if (mock.id === id) {
        return { ...mock, ...body };
      }
      return mock;
    });
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    const mocksC = this.mocks.find((mock) => mock.id === id);
    if (!mocksC) throw new NotFoundException();
    this.mocks = this.mocks.filter((mock) => mock.id !== id);
    return { message: 'Deleted user!' };
  }
}
